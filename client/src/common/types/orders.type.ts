export interface Order {
  id: string;
  date: string;
  scheduledHour: number;
  workUnits: number;
  courierId: string | null;
}

export interface CreateOrderDto extends Omit<Order, 'id'> {}

export interface AssignOrderDto extends Pick<Order, 'courierId'> {}

export interface UpdateOrderDto extends Pick<Order, 'date' | 'scheduledHour'> {}
