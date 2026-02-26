import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ordersService } from '../api/services';
import { queryKeys } from '../api/query-keys';
import type { CreateOrderDto, AssignOrderDto, Order, UpdateOrderDto } from '@/common/types/orders.type';

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderDto) => ordersService.create(data),
    onSuccess: (newOrder: Order) => {
      queryClient.invalidateQueries({ 
        queryKey: queryKeys.dayView.list(newOrder.date) 
      });
    },
  });
}

export function useAssignOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, data }: { orderId: string; data: AssignOrderDto }) => 
      ordersService.assign(orderId, data),
    onSuccess: (updatedOrder: Order) => {
      queryClient.invalidateQueries({ 
        queryKey: queryKeys.dayView.list(updatedOrder.date) 
      });
    },
  });
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateOrderDto; previousDate: string }) => 
      ordersService.updateOne(id, data),
    onSuccess: (updatedOrder: Order, { previousDate }) => {
      queryClient.invalidateQueries({ 
        queryKey: queryKeys.dayView.list(updatedOrder.date)
      });

      if (previousDate !== updatedOrder.date) {
        queryClient.invalidateQueries({ 
          queryKey: queryKeys.dayView.list(previousDate)
        });
      }
    },
  });
}
