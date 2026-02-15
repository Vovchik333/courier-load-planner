import { Order } from '../../../database/models/order.model';
import { Courier } from '../../../database/models/courier.model';

export type HourSlot = 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

export interface LoadBySlot {
  hour: HourSlot;
  load: number;
  overload: number;
  orders: Order[];
}

export interface CourierWithLoad {
  courier: Courier;
  loadBySlot: LoadBySlot[];
}

export class DayViewResponseDto {
  slots: HourSlot[];
  couriers: CourierWithLoad[];
  unassignedOrders: Order[];
}

