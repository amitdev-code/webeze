import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthenticationService } from '../providers/authentication.service';
import { RegisterDto } from '@auth_modules/dto/register.dto';
import { LoginDto } from '@auth_modules/dto/login.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { Verify2FADto } from '../dto/verify-2fa.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { GetUser } from '../decorators/get-user.decorator';
import { CurrentUserIp } from '@decorators/getUserIp.decorator';
import { CurrentUserTimezone } from '@decorators/getUserTimezone.decorator';
import { CurrentUserAgent } from '@decorators/getUserAgent.decorator';
import { LocalAuthGuard } from '@guards/local-auth.guard';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

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
  async login(@Body() loginDto: LoginDto) {
    return this.authenticationService.login(loginDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authenticationService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authenticationService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/setup')
  async setup2FA(@GetUser('id') userId: string) {
    return this.authenticationService.setup2FA(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/verify')
  async verify2FA(
    @GetUser('id') userId: string,
    @Body() verify2FADto: Verify2FADto,
  ) {
    return this.authenticationService.verify2FA(userId, verify2FADto.code);
  }

  @Get('verify-email')
  async verifyEmail(@Body('token') token: string) {
    return this.authenticationService.verifyEmail(token);
  }
}
