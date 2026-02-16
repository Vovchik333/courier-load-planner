import type { LoadBySlot } from "./hour-slot.type";

export interface Courier {
  id: string;
  name: string;
  hourlyLimit: number;
}

export interface CreateCourierDto extends Omit<Courier, 'id'>{}

export interface CourierWithLoad {
  courier: Courier;
  loadBySlot: LoadBySlot[];
}
