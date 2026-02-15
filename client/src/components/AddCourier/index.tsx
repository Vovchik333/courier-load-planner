import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "../Modal"

export const AddCourier = () => {
  return (
    <Modal
      buttonText="+ Add Courier"
      title="Add Courier"
    >
      <Field>
        <Label htmlFor="name-1">Name</Label>
        <Input id="name-1" name="name" placeholder="John Doe" />
      </Field>
      <Field>
        <Label htmlFor="hourly-limit-1">Hourly limit (work units):</Label>
        <Input id="username-1" name="username" placeholder="5" type="number" />
      </Field>
    </Modal>
  )
}
