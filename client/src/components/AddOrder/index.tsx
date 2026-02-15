import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "../Modal"
import { Button } from "../ui/button"

export const AddOrder: React.FC = () => {
  return (
    <Modal
      triggerElement={<Button variant="outline">+ Add Order</Button>}
      title="Add Order"
      submitButtonText="Create"
    >
      <Field>
        <Label htmlFor="date">Date:</Label>
        <Input id="date" name="date" type="date" />
      </Field>
      <Field>
        <Label htmlFor="hour">Hour:</Label>
        <Input id="hour" name="hour" type="number" defaultValue="16" min="0" max="23" />
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
        </select>
      </Field>
      <Field>
        <Label htmlFor="work-units">Work units:</Label>
        <Input id="work-units" name="work-units" type="number" defaultValue="3" min="1" />
      </Field>
    </Modal>
  )
}