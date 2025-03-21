import { IsNotEmpty, IsString, Length } from 'class-validator';

export class Verify2FADto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  code: string;
}
