import type { HourSlotType } from "@/common/types/hour-slot.type";
import { formatHour } from "@/helpers/date.helper";

type Props = {
  slots: HourSlotType[];
}

export const TableHead: React.FC<Props> = ({ slots }) => {
  return (
    <thead className="sticky top-0 bg-muted z-10">
      <tr>
        <th className="border p-2 text-left font-medium">Courier</th>
        {slots.map((hour) => (
          <th key={hour} className="border p-2 text-center font-medium">
            {formatHour(hour)}
          </th>
        ))}
      </tr>
    </thead>
  )
}