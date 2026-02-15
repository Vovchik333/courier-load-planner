import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../database/repositories/order.repository';
import { CourierRepository } from '../../database/repositories/courier.repository';
import {
  DayViewResponseDto,
  HourSlot,
  LoadBySlot,
  CourierWithLoad,
} from './dto/day-view-response.dto';
import { Order } from '../../database/models/order.model';
import { Courier } from '../../database/models/courier.model';

@Injectable()
export class DayViewService {
  private readonly HOUR_SLOTS: HourSlot[] = [10, 11, 12, 13, 14, 15, 16, 17];

  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly courierRepository: CourierRepository,
  ) {}

  async getDayView(date: string): Promise<DayViewResponseDto> {
    const orders = await this.orderRepository.findByDate(date);
    
    const unassignedOrders = orders.filter(
      (order) => order.courierId === null,
    );

    const couriers = await this.courierRepository.findAll();

    const couriersWithLoad: CourierWithLoad[] = couriers.map((courier) => {
      const loadBySlot = this.calculateLoadBySlot(courier, orders);
      return {
        courier,
        loadBySlot,
      };
    });

    return {
      slots: this.HOUR_SLOTS,
      couriers: couriersWithLoad,
      unassignedOrders,
    };
  }

  private calculateLoadBySlot(
    courier: Courier,
    orders: Order[],
  ): LoadBySlot[] {
    return this.HOUR_SLOTS.map((hour) => {
      const ordersForSlot = orders.filter(
        (order) => order.courierId === courier.id && order.scheduledHour === hour,
      );

      const load = ordersForSlot.reduce(
        (sum, order) => sum + order.workUnits,
        0,
      );

      const overload = Math.max(0, load - courier.hourlyLimit);

      return {
        hour,
        load,
        overload,
        orders: ordersForSlot,
      };
    });
  }
}

