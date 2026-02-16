import type { ReactNode } from "react";
import { OrderDetails } from "./components/OrderDetails";
import type { Order } from "@/common/types/orders.type";
import { ViewModal } from "../ViewModal";
import { useCouriers } from "@/hooks/useCouriers";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

type Props = {
  triggerElement: ReactNode;
  orders: Order[];
}

export const Orders: React.FC<Props> = ({
  triggerElement,
  orders
}) => {
  const { 
    data: couriers, 
    isLoading: couriersLoading, 
    isError: couriersError, 
    error: couriersErrorData 
  } = useCouriers();

  if (orders.length === 0) {
    return <div className="text-center text-muted-foreground">0</div>;
  }

  let modalContent = null;

  if (couriersLoading) {
    modalContent = <Loader />;
  } else if (couriersError) {
    modalContent = (
      <ErrorMessage 
        isError={couriersError} 
        error={couriersErrorData}
      />
    );
  } else {
    modalContent = (
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
        {orders.map(order => {
          return (
            <div
              key={order.id}
              className="border rounded-lg p-3 bg-muted/30"
            >
              <OrderDetails order={order} couriers={couriers || []} />
            </div>
          )
        })}
      </div>
    );
  }

  return (
    <ViewModal
      triggerElement={triggerElement}
      title="Order Details"
    >
      {modalContent}
    </ViewModal>
  );
}
