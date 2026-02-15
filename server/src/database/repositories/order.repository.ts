import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Order } from "../models/order.model";
import { CreateOrderDto } from "../../modules/orders/dto/create-order.dto";
import { AssignOrderDto } from "../../modules/orders/dto/assign-order.dto";

const orders: Order[] = [
  {
    id: '1',
    date: '2026-01-01',
    scheduledHour: 10,
    workUnits: 10,
    courierId: '1',
  },
  {
    id: '2',
    date: '2026-01-02',
    scheduledHour: 11,
    workUnits: 10,
    courierId: '2',
  },
  {
    id: '3',
    date: '2026-01-03',
    scheduledHour: 12,
    workUnits: 10,
    courierId: '3',
  },
  {
    id: '4',
    date: '2026-01-04',
    scheduledHour: 13,
    workUnits: 10,
    courierId: '4',
  },
];

@Injectable()
export class OrderRepository {
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
