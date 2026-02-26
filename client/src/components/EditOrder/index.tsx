import { useUpdateOrder } from "@/hooks/useOrders";
import { FormModal } from "../FormModal";
import { PrimaryButton } from "../PrimaryButton";
import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import type { Order } from "@/common/types/orders.type";

type Props  = {
  order: Order;
}

export const EditOrder: React.FC<Props> = ({
  order
}) => {
  const updateOrder = useUpdateOrder();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    const date = formData.get('date') as string;
    const scheduledHour = Number(formData.get('scheduledHour'));

    await updateOrder.mutateAsync({
      id: order.id,
      previousDate: order.date,
      data: {
        date,
        scheduledHour,
      },
    });
  };

  
  return (
    <FormModal
      triggerElement={<PrimaryButton>Edit</PrimaryButton>}
      title="Edit Order"
      onSubmit={handleSubmit}
    >
      <Field>
        <Label htmlFor="date">Date:</Label>
        <Input 
          id="date" 
          defaultValue={order.date}
          name="date" 
          type="date" 
          required 
        />
      </Field>
      <Field>
        <Label htmlFor="scheduledHour">Scheduled Hour:</Label>
        <Input 
          id="scheduledHour" 
          name="scheduledHour" 
          type="number" 
          defaultValue={order.scheduledHour}
          min={10}
          max={17}
          required 
        />
      </Field>
    </FormModal>
  );
}