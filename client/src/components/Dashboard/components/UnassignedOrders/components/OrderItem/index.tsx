import type { Order } from "@/common/types/orders.type";
import type { Courier } from "@/common/types/courier.type";
import { AssignOrder } from "@/components/AssignOrder"
import { formatHour } from "@/helpers/date.helper";

type Props = {
  order: Order;
  couriers: Courier[];
};

export const OrderItem: React.FC<Props> = ({ order, couriers }) => {
  return (
    <div
      className="border rounded-lg p-3 flex items-center justify-between gap-2"
    >
      <div>
        <div className="font-medium">{order.id}</div>
        <div className="text-sm text-muted-foreground">
          {formatHour(order.scheduledHour)} • {order.workUnits} units
        </div>
      </div>
      <AssignOrder 
        order={order} 
        couriers={couriers} 
      />
    </div>
  )
}