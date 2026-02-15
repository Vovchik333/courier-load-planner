import { IsDateString, IsNotEmpty } from 'class-validator';

export class DayViewQueryDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;
}

