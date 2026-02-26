import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { AssignOrderDto } from './dto/assign-order.dto';
import { IOrderRepository, ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';
import { UpdateOrderDto } from './dto/update-order.dto';

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

  async updayeOne(
    id: string,
    payload: UpdateOrderDto
  ) {
    const order = await this.orderRepository.updateOrder(id, payload);

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }
} 