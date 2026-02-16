import { Module, Global } from '@nestjs/common';
import { CourierRepository } from './repositories/courier.repository';
import { OrderRepository } from './repositories/order.repository';
import { COURIER_REPOSITORY_TOKEN } from './interfaces/courier-repository.interface';
import { ORDER_REPOSITORY_TOKEN } from './interfaces/order-repository.interface';

@Global()
@Module({
  providers: [
    {
      provide: COURIER_REPOSITORY_TOKEN,
      useClass: CourierRepository,
    },
    {
      provide: ORDER_REPOSITORY_TOKEN,
      useClass: OrderRepository,
    },
  ],
  exports: [COURIER_REPOSITORY_TOKEN, ORDER_REPOSITORY_TOKEN],
})
export class DatabaseModule {}

