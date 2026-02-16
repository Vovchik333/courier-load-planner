import { AssignOrder } from "@/components/AssignOrder"
import { formatHour } from "@/helpers/date.helper"
import type { Order } from "@/common/types/orders.type"
import type { Courier } from "@/common/types/courier.type"

type Props = {
  order: Order;
  couriers: Courier[];
}

export const OrderDetails: React.FC<Props> = ({
  order,
  couriers,
}) => {
  const courier = couriers.find(c => c.id === order.courierId);

  return (
    <div className="space-y-3">
      <div className="text-sm space-y-1">
        <div>
          <span className="font-medium">Order:</span> {order.id}
        </div>
        <div>
          <span className="font-medium">Date:</span> {order.date}
        </div>
        <div>
          <span className="font-medium">Hour:</span> {formatHour(order.scheduledHour)}
        </div>
        {courier && (
          <div>
            <span className="font-medium">Courier:</span> {courier.name}
          </div>
        )}
        <div>
          <span className="font-medium">Work units:</span> {order.workUnits}
        </div>
      </div>
      <div className="flex justify-end">
        <AssignOrder order={order} couriers={couriers} />
      </div>
    </div>
  )
}
