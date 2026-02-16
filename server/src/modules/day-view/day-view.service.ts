import { Injectable, Inject } from '@nestjs/common';
import { IOrderRepository, ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';
import { ICourierRepository, COURIER_REPOSITORY_TOKEN } from '../../database/interfaces/courier-repository.interface';
import {
  DayViewResponseDto,
  HourSlot,
  LoadBySlot,
  CourierWithLoad,
} from './dto/day-view-response.dto';
import { Order } from 'src/common/types/order.type';
import { Courier } from 'src/common/types/courier.type';

@Injectable()
export class DayViewService {
  private readonly HOUR_SLOTS: HourSlot[] = [10, 11, 12, 13, 14, 15, 16, 17];

  constructor(
    @Inject(ORDER_REPOSITORY_TOKEN)
    private readonly orderRepository: IOrderRepository,
    @Inject(COURIER_REPOSITORY_TOKEN)
    private readonly courierRepository: ICourierRepository,
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

