import { useQuery } from '@tanstack/react-query';
import { dayViewService } from '../api/services';
import { queryKeys } from '../api/query-keys';
import type { DayViewResponse } from '@/common/types/day-view.type';

export function useDayView(date: string) {
  return useQuery<DayViewResponse>({
    queryKey: queryKeys.dayView.list(date),
    queryFn: () => dayViewService.getByDate(date),
    enabled: date !== '', 
    staleTime: 1000 * 60 * 2, 
  });
}
