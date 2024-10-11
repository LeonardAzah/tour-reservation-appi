import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RoleDto {
  @IsOptional()
  @IsNumber()
  id?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
