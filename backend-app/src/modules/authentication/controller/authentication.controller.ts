import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from '../providers/authentication.service';
import { RegisterDto } from '@auth_modules/dto/register.dto';
import { LoginDto } from '@auth_modules/dto/login.dto';
import { AuthenticationTokenService } from '@auth_modules/providers/authenticationToken.service';
import { SocialAuthenticationService } from '@auth_modules/providers/socialAuthentication.service';
import { CurrentUserIp } from '@decorators/getUserIp.decorator';
import { CurrentUserTimezone } from '@decorators/getUserTimezone.decorator';
import { CurrentUserAgent } from '@decorators/getUserAgent.decorator';
import { LocalAuthGuard } from '@guards/local-auth.guard';
import { GoogleAuthGuard } from '@guards/google-auth.guard';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly authenticationTokenService: AuthenticationTokenService,
    private readonly socialAuthenticationService: SocialAuthenticationService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
    @CurrentUserIp() ip: string,
    @CurrentUserTimezone() timezone: string,
    @CurrentUserAgent() agent: string,
  ) {
    return this.authenticationService.register(
      registerDto,
      ip,
      timezone,
      agent,
    );
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @Body() loginDto: LoginDto,
    @CurrentUserIp() ip: string,
    @CurrentUserTimezone() timezone: string,
    @CurrentUserAgent() agent: string,
  ) {
    return this.authenticationService.login(loginDto, ip, timezone, agent);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // This route initiates the Google OAuth flow
    // The handler is empty because Passport redirects to Google
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    const frontendUrl = this.configService.get('url.frontendUrl');
    const user = req.user;

    if (!user) {
      return res.redirect(
        `${frontendUrl}/auth/login?error=authentication_failed`,
      );
    }

    // Redirect to frontend with access token in query params
    // In a real application, you might want to use a more secure method
    return res.redirect(
      `${frontendUrl}/auth/social-callback?token=${user.tokens.access_token}&refresh=${user.tokens.refresh_token}`,
    );
  }
}
