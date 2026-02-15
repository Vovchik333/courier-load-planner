import { Module } from '@nestjs/common';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';
import { CourierRepository } from '../../database/repositories/courier.repository';

@Module({
  controllers: [CouriersController],
  providers: [CouriersService, CourierRepository],
})
export class CouriersModule {}
