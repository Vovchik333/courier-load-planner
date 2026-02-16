import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CouriersModule } from './modules/couriers/couriers.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DayViewModule } from './modules/day-view/day-view.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    DatabaseModule, 
    CouriersModule,
    OrdersModule,
    DayViewModule,
  ],
})
export class AppModule {}
