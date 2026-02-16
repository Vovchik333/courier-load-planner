import { Module } from '@nestjs/common';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';
import { CourierRepository } from '../../database/repositories/courier.repository';
import { COURIER_REPOSITORY_TOKEN } from '../../database/interfaces/courier-repository.interface';

@Module({
  controllers: [CouriersController],
  providers: [
    CouriersService,
    {
      provide: COURIER_REPOSITORY_TOKEN,
      useClass: CourierRepository,
    },
  ],
})
export class CouriersModule {}
