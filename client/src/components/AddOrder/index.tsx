import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormModal } from "../FormModal"
import { Button } from "../ui/button"
import { useCreateOrder } from "@/hooks/useOrders"
import { useCouriers } from "@/hooks/useCouriers"

type Props = {
  selectedDate: string;
};

export const AddOrder: React.FC<Props> = ({ selectedDate }) => {
  const createOrder = useCreateOrder();
  const { data: couriers } = useCouriers();

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
      triggerElement={<Button variant="outline">+ Add Order</Button>}
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
          defaultValue="10" 
          min="10" 
          max="17" 
          required 
        />
      </Field>
      <Field>
        <Label htmlFor="courier">Courier:</Label>
        <select
          id="courier"
          name="courier"
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
          defaultValue="unassigned"
        >
          <option value="unassigned">Unassigned</option>
          {couriers?.map((courier) => (
            <option key={courier.id} value={courier.id}>
              {courier.name}
            </option>
          ))}
        </select>
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
      {createOrder.isError && (
        <div className="text-sm text-destructive">
          Error: {createOrder.error?.message}
        </div>
      )}
    </FormModal>
  )
}