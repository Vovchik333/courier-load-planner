import { Field } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Modal } from "../Modal"
import { Button } from "../ui/button"
import { useAssignOrder } from "@/hooks/useOrders"
import { useCouriers } from "@/hooks/useCouriers"

type AssignOrderProps = {
  orderId: string;
};

export const AssignOrder: React.FC<AssignOrderProps> = ({ orderId }) => {
  const assignOrder = useAssignOrder();
  const { data: couriers } = useCouriers();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const courierId = formData.get('move-to') as string;
    
    await assignOrder.mutateAsync({
      orderId,
      data: {
        courierId: courierId === 'unassigned' ? null : courierId || null,
      },
    });
  };

  return (
    <Modal
      triggerElement={<Button variant="outline">Assign</Button>}
      title="Assign Order"
      onSubmit={handleSubmit}
    >
      <Field>
        <Label htmlFor="move-to">Assign to:</Label>
        <select
          id="move-to"
          name="move-to"
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
      {assignOrder.isError && (
        <div className="text-sm text-destructive">
          Error: {assignOrder.error?.message}
        </div>
      )}
    </Modal>
  )
}
