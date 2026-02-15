import type { ReactNode } from "react";
import { Modal } from "../Modal";
import { OrderDetails } from "../OrderDetails";

const orders = [
  {
    orderId: "o1",
    date: "2026-02-13",
    hour: 10,
    courier: "Alex",
    units: 5
  },
  {
    orderId: "o2",
    date: "2026-02-13",
    hour: 16,
    courier: "Alex",
    units: 3
  },
  {
    orderId: "o3",
    date: "2026-02-13",
    hour: 11,
    courier: "Oksana",
    units: 2
  },
  {
    orderId: "o4",
    date: "2026-02-13",
    hour: 12,
    courier: "Ihor",
    units: 1
  },
  {
    orderId: "o5",
    date: "2026-02-13",
    hour: 13,
    courier: "Oksana",
    units: 4
  },
  {
    orderId: "o6",
    date: "2026-02-13",
    hour: 15,
    courier: "Ihor",
    units: 3
  },
  {
    orderId: "o7",
    date: "2026-02-13",
    hour: 16,
    courier: "Ihor",
    units: 2
  },
  {
    orderId: "o8",
    date: "2026-02-13",
    hour: 17,
    courier: "Ihor",
    units: 1
  }
]

type Props = {
  triggerElement: ReactNode;
}

export const Orders: React.FC<Props> = ({
  triggerElement
}) => {
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
              key={order.orderId}
              className="border rounded-lg p-3 bg-muted/30"
            >
              <OrderDetails
                orderId={order.orderId}
                date={order.date}
                hour={order.hour}
                courier={order.courier}
                units={order.units}
              />
            </div>
          )
        })}
      </div>
    </Modal>
  );
}
