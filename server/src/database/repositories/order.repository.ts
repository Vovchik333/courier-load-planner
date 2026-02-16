import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { orders } from "../models/orders.model";
import { CreateOrderDto } from "../../modules/orders/dto/create-order.dto";
import { AssignOrderDto } from "../../modules/orders/dto/assign-order.dto";
import { IOrderRepository } from "../interfaces/order-repository.interface";
import { Order } from "src/common/types/order.type";

@Injectable()
export class OrderRepository implements IOrderRepository {
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder: Order = {
      id: randomUUID(),
      ...createOrderDto,
    };
    orders.push(newOrder);

    return newOrder;
  }

  async updateOne(id: string, assignOrderDto: AssignOrderDto): Promise<Order> {
    const order = orders.find((order) => order.id === id);

    if (!order) {
      throw new Error('Order not found');
    }

    if (assignOrderDto.courierId !== undefined) {
      order.courierId = assignOrderDto.courierId;
    }

    return order;
  }

  async findByDate(date: string): Promise<Order[]> {
    return orders.filter((order) => order.date === date);
  }

  async findUnassignedByDate(date: string): Promise<Order[]> {
    return orders.filter(
      (order) => order.date === date && order.courierId === null,
    );
  }
}
