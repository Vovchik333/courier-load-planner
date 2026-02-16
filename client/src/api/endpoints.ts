export const API_ENDPOINTS = {
  couriers: {
    list: '/couriers',
    create: '/couriers',
  },
  orders: {
    create: '/orders',
    assign: (id: string) => `/orders/${id}/assign`,
  },
  dayView: (date: string) => `/day-view?date=${date}`,
} as const;
