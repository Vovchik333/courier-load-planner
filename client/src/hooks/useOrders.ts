import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import type { Order, CreateOrderDto, AssignOrderDto } from '@/common/types/orders.type';

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderDto) => apiClient.post<Order>(API_ENDPOINTS.orders.create, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dayView'] });
    },
  });
}

export function useAssignOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, data }: { orderId: string; data: AssignOrderDto }) => apiClient.patch<Order>(API_ENDPOINTS.orders.assign(orderId), data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dayView'] });
    },
  });
}
