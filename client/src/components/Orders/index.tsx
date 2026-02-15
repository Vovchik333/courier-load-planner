import type { ReactNode } from "react";
import { Modal } from "../Modal";
import { OrderDetails } from "./components/OrderDetails";
import type { Order } from "@/common/types/orders.type";

type Props = {
  triggerElement: ReactNode;
  orders: Order[];
}

export const Orders: React.FC<Props> = ({
  triggerElement,
  orders
}) => {
  if (orders.length === 0) {
    return <div className="text-center text-muted-foreground">No orders</div>;
  }

  return (
    <Modal
      triggerElement={triggerElement}
      title="Order Details"
      submitButtonText="Close"
    >
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
        {orders.map(order => {
          return (
            <div
              key={order.id}
              className="border rounded-lg p-3 bg-muted/30"
            >
              <OrderDetails
                orderId={order.id}
                date={order.date}
                hour={order.scheduledHour}
                courier={order.courierId || undefined}
                units={order.workUnits}
              />
            </div>
          )
        })}
      </div>
    </Modal>
  );
}
