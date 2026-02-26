import { IsDateString, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class UpdateOrderDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @Min(10)
  @Max(17)
  @IsNotEmpty()
  scheduledHour: number;
}
