import { Injectable } from "@nestjs/common";
import { couriers } from "../models/couriers.model";
import { randomUUID } from "crypto";
import { CreateCourierDto } from "../../modules/couriers/dto/create-courier.dto";
import { ICourierRepository } from "../interfaces/courier-repository.interface";
import { Courier } from "src/common/types/courier.type";

@Injectable()
export class CourierRepository implements ICourierRepository {
  async create(createCourierDto: CreateCourierDto): Promise<Courier> {
    const newCourier: Courier = {
      id: randomUUID(),
      ...createCourierDto,
    };
    couriers.push(newCourier);

    return newCourier;
  }

  async findAll(): Promise<Courier[]> {
    return couriers;
  }
}
