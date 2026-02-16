import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormModal } from "@/components/FormModal"
import { Button } from "@/components/ui/button"
import { useAssignOrder } from "@/hooks/useOrders"
import { useCouriers } from "@/hooks/useCouriers"
import { formatHour } from "@/helpers/date.helper"
import type { Order } from "@/common/types/orders.type"

type Props = {
  order: Order;
  triggerElement?: React.ReactNode;
};

export const AssignOrder: React.FC<Props> = ({ order, triggerElement }) => {
  const assignOrder = useAssignOrder();
  const { data: couriers } = useCouriers();

  const currentCourier = couriers?.find(c => c.id === order.courierId);
  const isReassign = !!order.courierId;
  const title = isReassign ? "Assign / Reassign Order" : "Assign Order";
  const defaultButton = triggerElement || (
    <Button variant="outline">{isReassign ? "Reassign" : "Assign"}</Button>
  );

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
        <select
          id="move-to"
          name="move-to"
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
          defaultValue={order.courierId || "unassigned"}
        >
          <option value="unassigned">Unassigned</option>
          {couriers?.map((courier) => (
            <option key={courier.id} value={courier.id}>
              {courier.name}
            </option>
          ))}
        </select>
      </Field>

      {assignOrder.isError && (
        <div className="text-sm text-destructive">
          Error: {assignOrder.error?.message}
        </div>
      )}
    </FormModal>
  )
}
