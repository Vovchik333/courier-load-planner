import { Injectable } from "@nestjs/common";
import { Courier } from "../models/courier.model";
import { randomUUID } from "crypto";
import { CreateCourierDto } from "../../modules/couriers/dto/create-courier.dto";

const couriers: Courier[] = [
  {
    id: '1',
    name: 'John Doe',
    hourlyLimit: 10,
  },
  {
    id: '2',
    name: 'Jane Doe',
    hourlyLimit: 10,
  },
  {
    id: '3',
    name: 'Jim Doe',
    hourlyLimit: 10,
  },
  {
    id: '4',
    name: 'Jill Doe',
    hourlyLimit: 10,
  },
];

@Injectable()
export class CourierRepository {
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
