import { Module } from '@nestjs/common';
import { DayViewController } from './day-view.controller';
import { DayViewService } from './day-view.service';
import { OrderRepository } from '../../database/repositories/order.repository';
import { CourierRepository } from '../../database/repositories/courier.repository';
import { COURIER_REPOSITORY_TOKEN } from '../../database/interfaces/courier-repository.interface';
import { ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';

@Module({
  controllers: [DayViewController],
  providers: [
    DayViewService,
    {
      provide: ORDER_REPOSITORY_TOKEN,
      useClass: OrderRepository,
    },
    {
      provide: COURIER_REPOSITORY_TOKEN,
      useClass: CourierRepository,
    },
  ],
})
export class DayViewModule {}

