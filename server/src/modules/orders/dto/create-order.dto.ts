import { IsNotEmpty, IsNumber, Min, Max, IsString, ValidateIf, IsDateString, IsDefined } from "class-validator";

export class CreateOrderDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @Min(10)
  @Max(17)
  @IsNotEmpty()
  scheduledHour: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  workUnits: number;

  @ValidateIf((o) => o.courierId !== null)
  @IsString({ message: 'courierId must be a string or null' })
  @IsNotEmpty()
  courierId: string | null;
}