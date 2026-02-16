import { apiClient } from '../client';
import { API_ENDPOINTS } from '../endpoints';
import type { DayViewResponse } from '@/common/types/day-view.type';

export const dayViewService = {
  getByDate: (date: string): Promise<DayViewResponse> => {
    return apiClient.get<DayViewResponse>(API_ENDPOINTS.dayView(date));
  },
};
