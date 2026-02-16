import { 
  useQuery, 
  useMutation, 
  useQueryClient 
} from '@tanstack/react-query';
import { couriersService } from '../api/services';
import { queryKeys } from '../api/query-keys';
import type { CreateCourierDto } from '@/common/types/courier.type';

export function useCouriers() {
  return useQuery({
    queryKey: queryKeys.couriers.list(),
    queryFn: () => couriersService.getAll(),
    staleTime: 1000 * 60 * 10, 
  });
}

export function useCreateCourier() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCourierDto) => couriersService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.couriers.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.dayView.all });
    },
  });
}
