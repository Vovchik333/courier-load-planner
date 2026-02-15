import { Module } from '@nestjs/common';
import { DayViewController } from './day-view.controller';
import { DayViewService } from './day-view.service';
import { OrderRepository } from '../../database/repositories/order.repository';
import { CourierRepository } from '../../database/repositories/courier.repository';

@Module({
  controllers: [DayViewController],
  providers: [DayViewService, OrderRepository, CourierRepository],
})
export class DayViewModule {}

