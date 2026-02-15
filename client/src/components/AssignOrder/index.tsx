import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "../Modal"

type Props = {

}

export const AssignOrder: React.FC<Props> = ({

}) => {
  return (
    <Modal
      buttonText="Assign"
      title="Assign Order"
    >
      <Field>
        <div className="text-sm">
          Order: o2 Date: 2026-02-13 Hour: 16:00
        </div>
      </Field>
      <Field>
        <Label htmlFor="current-courier">Current courier:</Label>
        <Input 
          id="current-courier" 
          name="current-courier" 
          value="Alex"
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
          defaultValue=""
        >
          <option value="">Select courier</option>
          <option value="any">Any courier</option>
          <option value="alex">Alex</option>
          <option value="oksana">Oksana</option>
          <option value="ihor">Ihor</option>
        </select>
      </Field>
    </Modal>
  )
}
