import { Injectable } from '@nestjs/common';
import { CreateCourierDto } from './dto/create-courier.dto';
import { CourierRepository } from '../../database/repositories/courier.repository';

@Injectable()
export class CouriersService {
  constructor(private readonly courierRepository: CourierRepository) {}

  async create(createCourierDto: CreateCourierDto) {
    const courier = await this.courierRepository.create(createCourierDto);

    return courier;
  }

  async findAll() {
    const couriers = await this.courierRepository.findAll();

    return couriers;
  }
}
