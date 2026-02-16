import { CreateOrderDto } from "src/modules/orders/dto/create-order.dto";
import { AssignOrderDto } from "src/modules/orders/dto/assign-order.dto";
import { Order } from "src/common/types/order.type";

export interface IOrderRepository {
  create(createOrderDto: CreateOrderDto): Promise<Order>;
  updateOne(id: string, assignOrderDto: AssignOrderDto): Promise<Order>;
  findByDate(date: string): Promise<Order[]>;
  findUnassignedByDate(date: string): Promise<Order[]>;
}

export const ORDER_REPOSITORY_TOKEN = Symbol('IOrderRepository');

