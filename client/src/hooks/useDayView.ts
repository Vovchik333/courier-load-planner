import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import type { DayViewResponse } from '@/common/types/day-view.type';

export function useDayView(date: string) {
  return useQuery({
    queryKey: ['dayView', date],
    queryFn: () => apiClient.get<DayViewResponse>(API_ENDPOINTS.dayView(date)),
    enabled: date !== '', 
    staleTime: 1000, 
  });
}
