import { Injectable, Inject } from '@nestjs/common';
import { IOrderRepository, ORDER_REPOSITORY_TOKEN } from '../../database/interfaces/order-repository.interface';
import { ICourierRepository, COURIER_REPOSITORY_TOKEN } from '../../database/interfaces/courier-repository.interface';
import {
  DayViewResponseDto,
  LoadBySlot,
  CourierWithLoad,
} from './dto/day-view-response.dto';
import { Order } from 'src/common/types/order.type';
import { Courier } from 'src/common/types/courier.type';
import { HOUR_SLOTS } from '../../common/constants/hour-slots.constant';

@Injectable()
export class DayViewService {
  constructor(
    @Inject(ORDER_REPOSITORY_TOKEN)
    private readonly orderRepository: IOrderRepository,
    @Inject(COURIER_REPOSITORY_TOKEN)
    private readonly courierRepository: ICourierRepository,
  ) {}

  async getDayView(date: string): Promise<DayViewResponseDto> {
    const [orders, couriers] = await Promise.all([
      this.orderRepository.findByDate(date),
      this.courierRepository.findAll(),
    ]);
    
    const unassignedOrders = orders.filter(
      (order) => order.courierId === null,
    );

    const couriersWithLoad: CourierWithLoad[] = couriers.map((courier) => {
      const loadBySlot = this.calculateLoadBySlot(courier, orders);
      return {
        courier,
        loadBySlot,
      };
    });

    return {
      slots: [...HOUR_SLOTS],
      couriers: couriersWithLoad,
      unassignedOrders,
    };
  }

  private calculateLoadBySlot(
    courier: Courier,
    orders: Order[],
  ): LoadBySlot[] {
    const courierOrders = orders.filter(
      (order) => order.courierId === courier.id,
    );

    const ordersByHour = new Map<number, Order[]>();
    for (const order of courierOrders) {
      const hour = order.scheduledHour;
      if (!ordersByHour.has(hour)) {
        ordersByHour.set(hour, []);
      }
      ordersByHour.get(hour)!.push(order);
    }

    return HOUR_SLOTS.map((hour) => {
      const ordersForSlot = ordersByHour.get(hour) || [];
      
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

