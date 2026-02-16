import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CouriersModule } from './modules/couriers/couriers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DayViewModule } from './modules/day-view/day-view.module';

@Module({
  imports: [
    DatabaseModule, 
    CouriersModule,
    OrdersModule,
    DayViewModule,
  ],
})
export class AppModule {}
