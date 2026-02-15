import { Module } from '@nestjs/common';
import { CouriersModule } from './modules/couriers/couriers.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [
    CouriersModule,
    OrdersModule,
  ],
})
export class AppModule {}
