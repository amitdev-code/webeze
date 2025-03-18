import { Controller } from '@nestjs/common';
import { AuthenticationService } from '../providers/authentication.service';
import { AuthenticationTokenService } from '../providers/authenticationToken.service';
import { AuthenticationHelperService } from '@auth_modules/providers/authenticationHelper';
// import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';

@Controller('auth-verification')
export class AuthenticationVerificationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly authenticationhelperservice: AuthenticationHelperService,
    private readonly authenticationTokenService: AuthenticationTokenService,
  ) {}
}
