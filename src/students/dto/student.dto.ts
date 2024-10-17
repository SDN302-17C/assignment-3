import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ description: 'Student code' })
  @IsString()
  @IsNotEmpty()
  studentCode: string;

  @ApiProperty({ description: 'Student full name' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ description: 'Student email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Student address' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Student gender' })
  @IsIn(['male', 'female'])
  @IsNotEmpty()
  gender: string;
}

export class UpdateStudentDto {
  @ApiPropertyOptional({ description: 'Student full name' })
  fullName?: string;

  @ApiPropertyOptional({ description: 'Student email' })
  email?: string;

  @ApiPropertyOptional({ description: 'Student address' })
  address?: string;

  @ApiPropertyOptional({ description: 'Student gender' })
  gender?: string;
}
