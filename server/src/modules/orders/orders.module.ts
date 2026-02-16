import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderRepository } from '../../database/repositories/order.repository';
import { ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: ORDER_REPOSITORY_TOKEN,
      useClass: OrderRepository,
    },
  ],
})

export class OrdersModule {}
