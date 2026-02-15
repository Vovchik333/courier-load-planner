import { Module } from '@nestjs/common';
import { CouriersModule } from './modules/couriers/couriers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DayViewModule } from './modules/day-view/day-view.module';

@Module({
  imports: [
    CouriersModule,
    OrdersModule,
    DayViewModule,
  ],
})
export class AppModule {}
