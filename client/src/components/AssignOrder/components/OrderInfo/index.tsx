import type { Order } from "@/common/types/orders.type";
import { formatHour } from "@/helpers/date.helper";

type Props = {
  order: Order;
}

export const OrderInfo: React.FC<Props> = ({ order }) => {
  return (
    <div className="text-sm space-y-2 pb-4 border-b">
      <div>
        <span className="font-medium">Order:</span> {order.id}
      </div>
      <div>
        <span className="font-medium">Date:</span> {order.date}
      </div>
      <div>
        <span className="font-medium">Hour:</span> {formatHour(order.scheduledHour)}
      </div>
    </div>
  )
}
