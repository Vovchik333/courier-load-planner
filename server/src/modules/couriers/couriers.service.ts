import { Injectable, Inject } from '@nestjs/common';
import { CreateCourierDto } from './dto/create-courier.dto';
import { ICourierRepository, COURIER_REPOSITORY_TOKEN } from '../../database/interfaces/courier-repository.interface';

@Injectable()
export class CouriersService {
  constructor(
    @Inject(COURIER_REPOSITORY_TOKEN)
    private readonly courierRepository: ICourierRepository,
  ) {}

  async create(createCourierDto: CreateCourierDto) {
    const courier = await this.courierRepository.create(createCourierDto);

    return courier;
  }

  async findAll() {
    const couriers = await this.courierRepository.findAll();

    return couriers;
  }
}
