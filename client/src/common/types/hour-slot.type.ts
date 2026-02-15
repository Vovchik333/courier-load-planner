import type { Order } from "./orders.type";

export type HourSlotType = 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

export interface LoadBySlot {
  hour: HourSlotType;
  load: number;
  overload: number;
  orders: Order[];
}
