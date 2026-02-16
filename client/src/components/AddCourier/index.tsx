import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormModal } from "../FormModal"
import { useCreateCourier } from "@/hooks/useCouriers"
import { SecondaryButton } from "../SecondaryButton"
import { ErrorMessage } from "../ErrorMessage"

export const AddCourier: React.FC = () => {
  const createCourier = useCreateCourier();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    
    await createCourier.mutateAsync(
      {
        name: formData.get('name') as string,
        hourlyLimit: parseInt(formData.get('hourlyLimit') as string, 10),
      }
    );
  };

  return (
    <FormModal
      triggerElement={<SecondaryButton>+ Add Courier</SecondaryButton>}
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
      <ErrorMessage 
        isError={createCourier.isError} 
        error={createCourier.error}
      />
    </FormModal>
  )
}
