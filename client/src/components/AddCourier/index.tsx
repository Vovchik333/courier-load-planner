import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "../Modal"
import { Button } from "../ui/button"
import { useCreateCourier } from "@/hooks/useCouriers"

export const AddCourier = () => {
  const createCourier = useCreateCourier();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    await createCourier.mutateAsync(
      {
        name: formData.get('name') as string,
        hourlyLimit: parseInt(formData.get('hourlyLimit') as string, 10),
      }
    );
    
    e.currentTarget.reset();
  };

  return (
    <Modal
      triggerElement={<Button variant="outline">+ Add Courier</Button>}
      title="Add Courier"
      onSubmit={handleSubmit}
    >
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
      </Field>
      <Field>
        <Label htmlFor="hourlyLimit">Hourly limit (work units):</Label>
        <Input id="hourlyLimit" name="hourlyLimit" placeholder="5" type="number" min="1" required />
      </Field>
      {createCourier.isError && (
        <div className="text-sm text-destructive">
          Error: {createCourier.error?.message}
        </div>
      )}
    </Modal>
  )
}
