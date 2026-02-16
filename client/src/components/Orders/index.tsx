import type { ReactNode } from "react";
import { FormModal } from "../FormModal";
import { OrderDetails } from "./components/OrderDetails";
import type { Order } from "@/common/types/orders.type";
import { ViewModal } from "../ViewModal";

type Props = {
  triggerElement: ReactNode;
  orders: Order[];
}

export const Orders: React.FC<Props> = ({
  triggerElement,
  orders
}) => {
  if (orders.length === 0) {
    return <div className="text-center text-muted-foreground">0</div>;
  }

  return (
    <ViewModal
      triggerElement={triggerElement}
      title="Order Details"
    >
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
        {orders.map(order => {
          return (
            <div
              key={order.id}
              className="border rounded-lg p-3 bg-muted/30"
            >
              <OrderDetails order={order} />
            </div>
          )
        })}
      </div>
    </ViewModal>
  );
}
