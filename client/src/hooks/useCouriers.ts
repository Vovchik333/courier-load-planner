import { 
  useQuery, 
  useMutation, 
  useQueryClient 
} from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import type { 
  Courier, 
  CreateCourierDto 
} from '@/common/types/courier.type';

export function useCouriers() {
  return useQuery({
    queryKey: ['couriers'],
    queryFn: () => apiClient.get<Courier[]>(API_ENDPOINTS.couriers.list),
  });
}

export function useCreateCourier() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCourierDto) => apiClient.post<Courier>(API_ENDPOINTS.couriers.create, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['couriers'] });
      queryClient.invalidateQueries({ queryKey: ['dayView'] });
    },
  });
}
