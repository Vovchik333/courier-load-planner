import { IsNotEmpty, IsString, IsOptional, ValidateIf } from "class-validator";

export class AssignOrderDto {
  @IsOptional()
  @ValidateIf((o) => o.courierId != null)
  @IsString()
  @IsNotEmpty()
  courierId: string | null;
}