import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { AssignOrderDto } from './dto/assign-order.dto';
import { OrderRepository } from '../../database/repositories/order.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}
  
  async create(createOrderDto: CreateOrderDto) {
    const order = await this.orderRepository.create(createOrderDto);

    return order;
  }

  async assign(id: string, assignOrderDto: AssignOrderDto) {
    const order = await this.orderRepository.updateOne(id, assignOrderDto);

    return order;
  }
}