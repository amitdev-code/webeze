import { Injectable } from '@nestjs/common';
import { UsersService } from '@users_modules/providers/users.service';
import { SocialAuthDto } from '../dto/social-auth.dto';
import { AuthenticationHelperService } from './authenticationHelper';
import { UserHelperService } from '@users_modules/providers/userHelper.service';
import {
  CommunicationFactory,
  CommunicationType,
} from '../../communication/method/communication.factory';
import { EmailService } from '../../communication/providers/email.service';
import { UsersEntity } from '@entity/main/user.entity';

@Injectable()
export class SocialAuthenticationService {
  constructor(
    private readonly userService: UsersService,
    private readonly userHelperService: UserHelperService,
    private readonly authHelper: AuthenticationHelperService,
    private readonly communicationFactory: CommunicationFactory,
  ) {}

  async validateSocialLogin(socialData: SocialAuthDto): Promise<any> {
    // Check if user already exists with this email
    let user = await this.userService.findOneByEmail(socialData.email);
    
    if (user) {
      // Update social login details if user exists
      user = await this.updateUserSocialDetails(user, socialData);
    } else {
      // Create a new user if not exists
      user = await this.createSocialUser(socialData);
    }

    // Return the user with token data
    return this.generateAuthResponseForSocialUser(user, socialData.provider);
  }

  private async createSocialUser(
    socialData: SocialAuthDto,
  ): Promise<UsersEntity> {
    // Create new user with social login data
    const newUser = await this.userHelperService.createUserFromSocial({
      email: socialData.email,
      firstName: socialData.firstName,
      lastName: socialData.lastName || '',
      provider: socialData.provider,
      socialId: socialData.id,
      photo: socialData.photo,
    });

    // Send welcome email
    await this.sendWelcomeEmail(newUser);

    return newUser;
  }

  private async updateUserSocialDetails(
    user: UsersEntity,
    socialData: SocialAuthDto,
  ): Promise<UsersEntity> {
    // Update user's social login details
    return await this.userHelperService.updateUserSocialDetails(user, {
      provider: socialData.provider,
      socialId: socialData.id,
    });
  }

  private async generateAuthResponseForSocialUser(
    user: UsersEntity,
    provider: string,
  ): Promise<any> {
    // Get user's primary company
    const company = await this.userService.getUserPrimaryCompany(user.id);
    
    if (!company) {
      throw new Error('User does not have a primary company');
    }

    // Generate tokens and create session
    const ip = '0.0.0.0'; // This should be passed from the controller
    const timezone = 'UTC'; // This should be passed from the controller
    const agent = JSON.stringify({ browser: 'Social Login', platform: provider });
    
    const session = await this.authHelper.createUserNewSession(
      user,
      company,
      ip,
      timezone,
      agent,
      null, // QueryRunner should be handled properly in a transaction
    );

    return {
      user: {
        id: user.id,
        email: user.useremail.email,
        username: user.username,
        role: user.role,
      },
      company: {
        id: company.id,
        name: company.name,
      },
      tokens: {
        access_token: session.session_token.token,
        refresh_token: session.refresh_token.token,
      },
    };
  }

  private async sendWelcomeEmail(user: UsersEntity): Promise<void> {
    const emailService = this.communicationFactory.getCommunicationService(
      CommunicationType.EMAIL,
    ) as EmailService;

    await emailService.sendTemplateEmail(
      user.useremail.email,
      'Welcome to Our Platform',
      'welcome',
      {
        userName: user.username || 'User',
        userEmail: user.useremail.email,
        year: new Date().getFullYear(),
        companyName: process.env.COMPANY_NAME || 'Your Company',
        logoUrl: process.env.LOGO_URL || 'https://example.com/logo.png',
        dashboardUrl: `${process.env.FRONTEND_URL}/dashboard`,
        docsUrl: `${process.env.FRONTEND_URL}/docs`,
        tutorialsUrl: `${process.env.FRONTEND_URL}/tutorials`,
        faqUrl: `${process.env.FRONTEND_URL}/faq`,
        supportEmail: process.env.SUPPORT_EMAIL || 'support@example.com',
        unsubscribeUrl: `${process.env.FRONTEND_URL}/unsubscribe`,
        privacyUrl: `${process.env.FRONTEND_URL}/privacy`,
      },
    );
  }
}
