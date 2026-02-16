import { apiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import type { Courier, CreateCourierDto } from '@/common/types/courier.type';

export const couriersService = {
  getAll: (): Promise<Courier[]> => {
    return apiClient.get<Courier[]>(API_ENDPOINTS.couriers.list);
  },
  create: (data: CreateCourierDto): Promise<Courier> => {
    return apiClient.post<Courier>(API_ENDPOINTS.couriers.create, data);
  },
};
