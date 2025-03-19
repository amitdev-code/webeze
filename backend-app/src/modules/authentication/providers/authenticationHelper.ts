import { Injectable } from '@nestjs/common';
import { CompanyHelperService } from '@company_modules/providers/companyHelper.service';
import { UserHelperService } from '@users_modules/providers/userHelper.service';
import { LoginDto } from '@auth_modules/dto/login.dto';
import { UsersService } from '@users_modules/providers/users.service';
import { WrongCredentialsException } from '@exceptions/authenticationExceptions/WrongCredentialsException';
import * as bcrypt from 'bcrypt';
import { AuthenticationTokenService } from './authenticationToken.service';
import { UsersEntity } from '@entity/main/user.entity';
import { CompanyEntity } from '@entity/shared/company.entity';
import { RegisterDto } from '@auth_modules/dto/register.dto';
import { QueryRunner } from 'typeorm';
import { GeneralHelperFunctions } from '@common/helper/generalHelperFunctions';
import {
  CommunicationFactory,
  CommunicationType,
} from '../../communication/method/communication.factory';
import { EmailService } from '../../communication/providers/email.service';
import { MailSubjects } from '@communication_modules/helper/mail_subjects';

@Injectable()
export class AuthenticationHelperService {
  constructor(
    private readonly userhelperservice: UserHelperService,
    private readonly userservice: UsersService,
    private readonly companyhelperservice: CompanyHelperService,
    private readonly authtokenservice: AuthenticationTokenService,
    private readonly communicationFactory: CommunicationFactory,
  ) {}

  async validateUserRegistration(registerUser: RegisterDto) {
    try {
      // VALIDATE USER EMAIL EXIST
      await this.userhelperservice.validateUserByEmailOrPhone({
        validate: 'email',
        email: registerUser.email,
      });

      // VALIDATE IF COMPANY EXIST WITH SAME NAME
      await this.companyhelperservice.validateCompanyByName(
        registerUser.company_name,
      );
    } catch (error) {
      throw error;
    }
  }

  async validateUserLogin(logindto: LoginDto) {
    // EMAIL VALIDATION
    const userDetail = await this.userservice.findOneByEmail(logindto.email);
    if (!userDetail) {
      throw new WrongCredentialsException();
    }
    // PASSWORD VALIDATION
    if (await bcrypt.compare(logindto.password, userDetail.password)) {
      return userDetail;
    } else {
      throw new WrongCredentialsException();
    }
  }

  async createUserNewSession(
    user: UsersEntity,
    company: CompanyEntity,
    ip: string,
    timezone: string,
    agent: string,
    queryRunner: QueryRunner,
  ) {
    const authTokens = await this.authtokenservice.generateAuthenticationToken({
      user_id: user.id,
      email: user.useremail.email,
      role: user.role,
      company_id: company.id,
    });
    const session = await this.userhelperservice.createUserSession(
      {
        user_id: user.id,
        sessionToken: authTokens.accessToken,
        refreshToken: authTokens.refreshToken,
        ip,
        user_agent: JSON.parse(agent),
      },
      queryRunner,
    );
    return session;
  }

  async updateUserSession(
    user: UsersEntity,
    company: CompanyEntity,
    ip: string,
    timezone: string,
    agent: string,
  ) {
    const authTokens = await this.authtokenservice.generateAuthenticationToken({
      user_id: user.id,
      email: user.useremail.email,
      role: user.role,
      company_id: company.id,
    });
    const session = await this.userhelperservice.updateUserAuthToken({
      user_id: user.id,
      sessionToken: authTokens.accessToken,
      refreshToken: authTokens.refreshToken,
      ip,
      user_agent: JSON.parse(agent),
    });
    return session;
  }

  async createUserVerificationToken(user: UsersEntity) {
    const verificationToken =
      await this.authtokenservice.generateVerificationToken(user.id);
    const OTP = GeneralHelperFunctions.generateSixDigitOTP();
    await this.userhelperservice.createUserVerificationToken(
      user,
      verificationToken,
      OTP,
    );

    // Send verification email using CommunicationFactory
    const emailService = this.communicationFactory.getCommunicationService(
      CommunicationType.EMAIL,
    ) as EmailService;

    await emailService.sendTemplateEmail(
      user.useremail.email,
      MailSubjects.VERIFICATION_CODE,
      'password-reset',
      {
        userName: user.username || 'User',
        resetUrl: `${process.env.FRONTEND_URL}/verify?token=${verificationToken}`,
        expiryTime: '24',
      },
    );

    return {
      verificationToken,
    };
  }

  async forgotPassword(email: string) {
    const user = await this.userservice.findOneByEmail(email);
    if (!user) {
      // Return success even if user not found to prevent email enumeration
      return { success: true };
    }

    const resetToken = await this.authtokenservice.generatePasswordResetToken(
      user.id,
    );

    const emailService = this.communicationFactory.getCommunicationService(
      CommunicationType.EMAIL,
    ) as EmailService;

    await emailService.sendTemplateEmail(
      user.useremail.email,
      MailSubjects.RESET_PASSWORD,
      'password-reset',
      {
        userName: user.username || 'User',
        resetUrl: `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`,
        expiryTime: '24',
      },
    );

    return { success: true };
  }

  async resetPassword(token: string, newPassword: string) {
    const decodedToken =
      await this.authtokenservice.verifyPasswordResetToken(token);
    if (!decodedToken) {
      throw new Error('Invalid or expired reset token');
    }

    const user = await this.userservice.findOne(decodedToken.userId);
    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.userservice.updatePassword(user.id, hashedPassword);

    // Invalidate all existing sessions
    await this.userhelperservice.invalidateAllUserSessions(user.id);

    return { success: true };
  }

  async setup2FA(userId: string) {
    const user = await this.userservice.findOne(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const secret = await this.authtokenservice.generate2FASecret();

    // Update user's 2FA configuration
    await this.userservice.update2FAConfig(userId, {
      is_configured: true,
      created_at: new Date(),
      secret,
      recovery_codes: await this.authtokenservice.generateRecoveryCodes(),
      attempts: 0,
    });

    return {
      secret: secret.base32,
      otpauthUrl: secret.otpauth_url,
    };
  }

  async verify2FA(userId: string, code: string) {
    const user = await this.userservice.findOne(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (!user.two_fact_auth.is_configured) {
      throw new Error('2FA is not configured for this user');
    }

    const isValid = await this.authtokenservice.verify2FACode(
      user.two_fact_auth.secret.base32,
      code,
    );

    if (!isValid) {
      // Increment failed attempts
      await this.userservice.increment2FAAttempts(userId);
      throw new Error('Invalid 2FA code');
    }

    // Reset attempts on successful verification
    await this.userservice.reset2FAAttempts(userId);

    return { success: true };
  }

  async verifyEmail(token: string) {
    const decodedToken = await this.authtokenservice.verifyEmailToken(token);
    if (!decodedToken) {
      throw new Error('Invalid or expired verification token');
    }

    const user = await this.userservice.findOne(decodedToken.userId);
    if (!user) {
      throw new Error('User not found');
    }

    await this.userservice.verifyEmail(user.id);

    return { success: true };
  }
}
