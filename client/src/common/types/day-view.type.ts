import type { HourSlotType } from "./hour-slot.type";
import type { CourierWithLoad } from "./courier.type";
import type { Order } from "./orders.type";

export interface DayViewResponse {
  slots: HourSlotType[];
  couriers: CourierWithLoad[];
  unassignedOrders: Order[];
}
