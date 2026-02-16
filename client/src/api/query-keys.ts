export const queryKeys = {
  couriers: {
    all: ['couriers'] as const,
    lists: () => [...queryKeys.couriers.all, 'list'] as const,
    list: () => [...queryKeys.couriers.lists()] as const,
    details: () => [...queryKeys.couriers.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.couriers.details(), id] as const,
  },
  orders: {
    all: ['orders'] as const,
    lists: () => [...queryKeys.orders.all, 'list'] as const,
    list: () => [...queryKeys.orders.lists()] as const,
    details: () => [...queryKeys.orders.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.orders.details(), id] as const,
  },
  dayView: {
    all: ['dayView'] as const,
    lists: () => [...queryKeys.dayView.all, 'list'] as const,
    list: (date: string) => [...queryKeys.dayView.lists(), date] as const,
  },
} as const;
