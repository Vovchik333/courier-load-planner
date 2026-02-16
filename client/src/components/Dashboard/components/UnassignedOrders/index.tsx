import type { Order } from "@/common/types/orders.type";
import type { Courier } from "@/common/types/courier.type";
import { OrderItem } from "./components/OrderItem";

type Props = {
  orders: Order[];
  couriers: Courier[];
};

export const UnassignedOrders: React.FC<Props> = ({ orders, couriers }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">Unassigned orders ({orders.length})</h3>
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2">
        {orders.length === 0 ? (
          <div className="text-sm text-muted-foreground">No unassigned orders</div>
        ) : (
          <>
            {orders.map((order) => (
              <OrderItem 
                key={order.id} 
                order={order}
                couriers={couriers}
              />
            ))}
          </>
        )}
      </div>
    </section>
  )
}