import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormModal } from "../FormModal"
import { useCreateOrder } from "@/hooks/useOrders"
import { useCouriers } from "@/hooks/useCouriers"
import { PrimaryButton } from "../PrimaryButton"
import { CustomSelect, type SelectOption } from "../CustomSelect"
import { ErrorMessage } from "../ErrorMessage"

type Props = {
  selectedDate: string;
};

export const AddOrder: React.FC<Props> = ({ selectedDate }) => {
  const createOrder = useCreateOrder();
  const { data: couriers, isLoading: couriersLoading, isError: couriersError } = useCouriers();

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
    
    const scheduledHour = parseInt(formData.get('hour') as string, 10);
    const workUnits = parseInt(formData.get('work-units') as string, 10);
    const courierId = formData.get('courier') as string;
    
    await createOrder.mutateAsync(
      {
        date: formData.get('date') as string || selectedDate,
        scheduledHour,
        workUnits,
        courierId: courierId === 'unassigned' ? null : courierId,
      }
    );
  };

  return (
    <FormModal
      triggerElement={<PrimaryButton>+ Add Order</PrimaryButton>}
      title="Add Order"
      submitButtonText="Create"
      onSubmit={handleSubmit}
    >
      <Field>
        <Label htmlFor="date">Date:</Label>
        <Input 
          id="date" 
          name="date" 
          type="date" 
          defaultValue={selectedDate} 
          required 
        />
      </Field>
      <Field>
        <Label htmlFor="hour">Hour:</Label>
        <Input 
          id="hour" 
          name="hour" 
          type="number" 
          placeholder="10"
          min="10" 
          max="17" 
          required 
        />
      </Field>
      <Field>
        <Label htmlFor="courier">Courier:</Label>
        <CustomSelect 
          name="courier"
          options={courierOptions}
          defaultValue="unassigned"
          disabled={couriersError}
          isLoading={couriersLoading}
          isError={couriersError}
          errorMessage="Failed to load couriers"
          loadingMessage="Loading couriers..."
        />
      </Field>
      <Field>
        <Label htmlFor="work-units">Work units:</Label>
        <Input 
          id="work-units" 
          name="work-units" 
          type="number" 
          defaultValue="3" 
          min="1" 
          required 
        />
      </Field>
      <ErrorMessage 
        isError={createOrder.isError} 
        error={createOrder.error}
      />
    </FormModal>
  )
}