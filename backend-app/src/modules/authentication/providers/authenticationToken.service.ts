import { TokenPayload } from '@auth_modules/dto/tokenPayload.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserHelperService } from '@users_modules/providers/userHelper.service';
import * as bcrypt from 'bcrypt';
import * as speakeasy from 'speakeasy';

export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
@Injectable()
export class AuthenticationTokenService {
  private readonly JWT_SECRET_KEY: string;
  private readonly JWT_EXPIRY_TIME: string;
  private readonly JWT_REFRESH_SECRET_KEY: string;
  private readonly JWT_REFRESH_EXPIRY_TIME: string;
  private readonly JWT_VERIFICATION_SECRET_KEY: string;
  private readonly JWT_VERIFICATION_EXPIRY_TIME: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly userhelperservice: UserHelperService,
    private jwtService: JwtService,
  ) {
    const JWT_SECRET_KEY = this.configService.getOrThrow('auth.secret', {
      infer: true,
    });
    const JWT_EXPIRY_TIME = this.configService.getOrThrow('auth.expires', {
      infer: true,
    });
    const JWT_REFRESH_SECRET_KEY = this.configService.getOrThrow(
      'auth.secret',
      {
        infer: true,
      },
    );
    const JWT_REFRESH_EXPIRY_TIME = this.configService.getOrThrow(
      'auth.expires',
      {
        infer: true,
      },
    );

    const JWT_VERIFICATION_SECRET_KEY = this.configService.getOrThrow(
      'auth.jwtVerificationSecret',
      {
        infer: true,
      },
    );
    const JWT_VERIFICATION_EXPIRY_TIME = this.configService.getOrThrow(
      'auth.jwtVerificationExpires',
      {
        infer: true,
      },
    );

    this.JWT_VERIFICATION_SECRET_KEY = JWT_VERIFICATION_SECRET_KEY;
    this.JWT_VERIFICATION_EXPIRY_TIME = JWT_VERIFICATION_EXPIRY_TIME;
    this.JWT_SECRET_KEY = JWT_SECRET_KEY;
    this.JWT_EXPIRY_TIME = JWT_EXPIRY_TIME;
    this.JWT_REFRESH_SECRET_KEY = JWT_REFRESH_SECRET_KEY;
    this.JWT_REFRESH_EXPIRY_TIME = JWT_REFRESH_EXPIRY_TIME;
  }

  async generateAuthenticationToken(tokenPayload: TokenPayload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: tokenPayload.user_id,
          email: tokenPayload.email,
          role: tokenPayload.role,
          company: tokenPayload.company_id,
        },
        {
          secret: this.JWT_SECRET_KEY,
          expiresIn: this.JWT_EXPIRY_TIME,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: tokenPayload.user_id,
          email: tokenPayload.email,
          role: tokenPayload.role,
          company: tokenPayload.company_id,
        },
        {
          secret: this.JWT_REFRESH_SECRET_KEY,
          expiresIn: this.JWT_REFRESH_EXPIRY_TIME,
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async generateVerificationToken(user_id: string) {
    const verificationToken = await this.jwtService.signAsync(
      {
        sub: user_id,
      },
      {
        secret: this.JWT_VERIFICATION_SECRET_KEY,
        expiresIn: this.JWT_VERIFICATION_EXPIRY_TIME,
      },
    );

    return verificationToken;
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    if (refreshToken) {
      const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
      await this.userhelperservice.updateUserRefreshToken(
        userId,
        hashedRefreshToken,
      );
    } else {
      await this.userhelperservice.updateUserRefreshToken(userId, null);
    }
  }

  async decodeVerificationToken(token: string) {
    return this.jwtService.verify(token, {
      secret: this.JWT_VERIFICATION_SECRET_KEY,
    });
  }

  async generatePasswordResetToken(userId: string): Promise<string> {
    return this.jwtService.signAsync(
      { userId },
      {
        secret: this.configService.get('JWT_PASSWORD_RESET_SECRET'),
        expiresIn: '24h',
      },
    );
  }

  async verifyPasswordResetToken(
    token: string,
  ): Promise<{ userId: string } | null> {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_PASSWORD_RESET_SECRET'),
      });
    } catch {
      return null;
    }
  }

  async generateEmailToken(userId: string): Promise<string> {
    return this.jwtService.signAsync(
      { userId },
      {
        secret: this.configService.get('JWT_EMAIL_VERIFICATION_SECRET'),
        expiresIn: '24h',
      },
    );
  }

  async verifyEmailToken(token: string): Promise<{ userId: string } | null> {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_EMAIL_VERIFICATION_SECRET'),
      });
    } catch {
      return null;
    }
  }

  async generate2FASecret() {
    const secret = speakeasy.generateSecret({
      length: 20,
      name: this.configService.get('APP_NAME'),
    });

    return {
      ascii: secret.ascii,
      hex: secret.hex,
      base32: secret.base32,
      otpauth_url: secret.otpauth_url,
    };
  }

  async verify2FACode(secret: string, code: string): Promise<boolean> {
    return speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token: code,
    });
  }

  async generateRecoveryCodes(): Promise<
    Array<{ code: string; active: boolean }>
  > {
    const codes = [];
    for (let i = 0; i < 8; i++) {
      codes.push({
        code: speakeasy.generateSecret({ length: 10 }).base32,
        active: true,
      });
    }
    return codes;
  }
}
