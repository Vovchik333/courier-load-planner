import type { UnassignedOrder } from "@/common/types/orders.type";
import { AssignOrder } from "../AssignOrder";

const unassignedOrders: UnassignedOrder[] = [
  { id: "o9", hour: 16, units: 3 },
  { id: "o10", hour: 11, units: 2 },
  { id: "o11", hour: 14, units: 1 },
];

export const UnassignedOrders: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Unassigned orders</h3>
      <div className="space-y-2">
        {unassignedOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-3 flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{order.id}</div>
              <div className="text-sm text-muted-foreground">
                hour {order.hour} units {order.units}
              </div>
            </div>
            <AssignOrder/>
          </div>
        ))}
      </div>
    </section>
  )
}