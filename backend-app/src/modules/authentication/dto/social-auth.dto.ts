import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SocialAuthDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsNotEmpty()
  @IsString()
  provider: string;

  @IsOptional()
  accessToken?: string;

  @IsOptional()
  refreshToken?: string;
}
