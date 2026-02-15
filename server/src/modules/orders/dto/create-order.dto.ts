import { IsNotEmpty, IsNumber, Min, Max, IsString, IsOptional, ValidateIf, IsDateString } from "class-validator";

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

  @IsOptional()
  @ValidateIf((o) => o.courierId != null)
  @IsString()
  @IsNotEmpty()
  courierId: string | null;
}