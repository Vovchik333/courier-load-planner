import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { AssignOrderDto } from './dto/assign-order.dto';
import { IOrderRepository, ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY_TOKEN)
    private readonly orderRepository: IOrderRepository,
  ) {}
  
  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.create(createOrderDto);

    return order;
  }

  async assign(id: string, assignOrderDto: AssignOrderDto) {
    const order = await this.orderRepository.updateOne(id, assignOrderDto);

    return order;
  }
}