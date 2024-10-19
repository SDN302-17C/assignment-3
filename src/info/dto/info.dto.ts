import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInfoDto {
  @ApiProperty({ description: 'Student code' })
  @IsString()
  @IsNotEmpty()
  studentCode: string;

  @ApiProperty({ description: 'Student full name' })
  @IsString()
  @IsNotEmpty()
  fullName: string;
}

