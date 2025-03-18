import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { SocialAuthenticationService } from '../providers/socialAuthentication.service';
import { SocialAuthDto } from '../dto/social-auth.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly socialAuthService: SocialAuthenticationService,
  ) {
    const clientID = configService.getOrThrow('auth.googleClientId', {
      infer: true,
    });
    const clientSecret = configService.getOrThrow('auth.googleClientSecret', {
      infer: true,
    });
    const callbackURL = `${configService.getOrThrow('url.backendUrl', { infer: true })}/auth/google/callback`;

    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos, provider } = profile;

    const userData: SocialAuthDto = {
      id,
      email: emails[0].value,
      firstName: name?.givenName || '',
      lastName: name?.familyName || '',
      displayName: profile.displayName,
      photo: photos?.[0]?.value,
      provider,
      accessToken,
      refreshToken,
    };

    const user = await this.socialAuthService.validateSocialLogin(userData);
    done(null, user);
  }
}
