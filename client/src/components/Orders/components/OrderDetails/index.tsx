import { Field } from "@/components/ui/field"

type Props = {
  orderId: string
  date: string
  hour: number
  courier?: string
  units?: number
}

export const OrderDetails: React.FC<Props> = ({
  orderId,
  date,
  hour,
  courier,
  units,
}) => {
  const formatHour = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`
  }

  return (
    <Field>
      <div className="text-sm space-y-1">
        <div>
          <span className="font-medium">Order:</span> {orderId}
        </div>
        <div>
          <span className="font-medium">Date:</span> {date}
        </div>
        <div>
          <span className="font-medium">Hour:</span> {formatHour(hour)}
        </div>
        {courier && (
          <div>
            <span className="font-medium">Courier:</span> {courier}
          </div>
        )}
        {units !== undefined && (
          <div>
            <span className="font-medium">Work units:</span> {units}
          </div>
        )}
      </div>
    </Field>
  )
}
