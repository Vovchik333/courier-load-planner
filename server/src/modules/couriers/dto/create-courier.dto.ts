import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateCourierDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  hourlyLimit: number;
}
