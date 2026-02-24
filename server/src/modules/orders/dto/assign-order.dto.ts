import { IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class AssignOrderDto {
  @ValidateIf((o) => o.courierId !== null)
  @IsString({ message: 'courierId must be a string or null' })
  @IsNotEmpty()
  courierId: string | null;
}
