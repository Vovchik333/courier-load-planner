import { Order } from "src/common/types/order.type";
import { randomUUID } from "crypto";

const today = new Date().toISOString().split('T')[0];

export const orders: Order[] = [
  {
    id: randomUUID(),
    date: today,
    scheduledHour: 10,
    workUnits: 5,
    courierId: null,
  },
  {
    id: randomUUID(),
    date: today,
    scheduledHour: 12,
    workUnits: 8,
    courierId: null,
  },
  {
    id: randomUUID(),
    date: today,
    scheduledHour: 14,
    workUnits: 6,
    courierId: null,
  },
  {
    id: randomUUID(),
    date: today,
    scheduledHour: 15,
    workUnits: 7,
    courierId: null,
  },
  {
    id: randomUUID(),
    date: today,
    scheduledHour: 16,
    workUnits: 9,
    courierId: null,
  },
];