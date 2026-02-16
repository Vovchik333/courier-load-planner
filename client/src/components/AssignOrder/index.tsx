import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormModal } from "@/components/FormModal"
import { useAssignOrder } from "@/hooks/useOrders"
import { useCouriers } from "@/hooks/useCouriers"
import type { Order } from "@/common/types/orders.type"
import { SecondaryButton } from "../SecondaryButton"
import { OrderInfo } from "./components/OrderInfo"
import { CustomSelect, type SelectOption } from "../CustomSelect"
import { ErrorMessage } from "../ErrorMessage"

type Props = {
  order: Order;
  triggerElement?: React.ReactNode;
};

export const AssignOrder: React.FC<Props> = ({ order, triggerElement }) => {
  const assignOrder = useAssignOrder();
  const { data: couriers, isLoading: couriersLoading, isError: couriersError } = useCouriers();

  const currentCourier = couriers?.find(c => c.id === order.courierId);
  const isReassign = order.courierId !== null;
  const title = isReassign ? "Assign / Reassign Order" : "Assign Order";
  const defaultButton = triggerElement || (
    <SecondaryButton>{isReassign ? "Reassign" : "Assign"}</SecondaryButton>
  );
  const courierOptions: SelectOption[] = [
    {
      value: "unassigned",
      label: "Unassigned",
    },
    ...couriers?.map((courier) => ({
      value: courier.id,
      label: courier.name,
    })) ?? [],
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const courierId = formData.get('move-to') as string;
    
    await assignOrder.mutateAsync({
      orderId: order.id,
      data: {
        courierId: courierId === 'unassigned' ? null : courierId || null,
      },
    });
  };

  return (
    <FormModal
      triggerElement={defaultButton}
      title={title}
      onSubmit={handleSubmit}
    >
      <OrderInfo order={order} />
      <Field>
        <Label htmlFor="current-courier">Current courier:</Label>
        <Input 
          id="current-courier" 
          name="current-courier" 
          value={currentCourier?.name || "Unassigned"}
          readOnly
          className="bg-muted"
        />
      </Field>
      <Field>
        <Label htmlFor="move-to">Move to:</Label>
        <CustomSelect 
          name="move-to"
          options={courierOptions}
          defaultValue={order.courierId ?? "unassigned"}
          disabled={couriersError}
          isLoading={couriersLoading}
          isError={couriersError}
          errorMessage="Failed to load couriers"
          loadingMessage="Loading couriers..."
        />
      </Field>
      <ErrorMessage 
        isError={assignOrder.isError} 
        error={assignOrder.error}
      />
    </FormModal>
  )
}
