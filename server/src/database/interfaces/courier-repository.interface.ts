import { CreateCourierDto } from "src/modules/couriers/dto/create-courier.dto";
import { Courier } from "src/common/types/courier.type";

export interface ICourierRepository {
  create(createCourierDto: CreateCourierDto): Promise<Courier>;
  findAll(): Promise<Courier[]>;
}

export const COURIER_REPOSITORY_TOKEN = Symbol('ICourierRepository');
