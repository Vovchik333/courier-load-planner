import { AssignOrder } from "@/components/AssignOrder";
import { formatHour } from "@/helpers/date.helper";
import type { Order } from "@/common/types/orders.type";

type Props = {
  orders: Order[];
};

export const UnassignedOrders: React.FC<Props> = ({ orders }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Unassigned orders</h3>
      {orders.length === 0 ? (
        <div className="text-sm text-muted-foreground">No unassigned orders</div>
      ) : (
        <div className="space-y-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-3 flex items-center justify-between gap-2"
            >
              <div>
                <div className="font-medium">{order.id}</div>
                <div className="text-sm text-muted-foreground">
                  {formatHour(order.scheduledHour)} • {order.workUnits} units
                </div>
              </div>
              <AssignOrder order={order} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}