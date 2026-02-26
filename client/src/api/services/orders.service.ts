import { apiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import type { Order, CreateOrderDto, AssignOrderDto, UpdateOrderDto } from '@/common/types/orders.type';

export const ordersService = {
  create: (data: CreateOrderDto): Promise<Order> => {
    return apiClient.post<Order>(API_ENDPOINTS.orders.create, data);
  },
  assign: (id: string, data: AssignOrderDto): Promise<Order> => {
    return apiClient.patch<Order>(API_ENDPOINTS.orders.assign(id), data);
  },
  updateOne: (id: string, data: UpdateOrderDto): Promise<Order> => {
    return apiClient.patch<Order>(API_ENDPOINTS.orders.updateOne(id), data);
  },
};
