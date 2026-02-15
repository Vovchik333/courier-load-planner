import type { Courier } from "@/common/types/courier.type";
import { Notes } from "../Notes";
import { UnassignedOrders } from "../UnassignedOrders";
import { formatHour } from "@/helpers/date.helper";
import type { HourSlot } from "@/common/types/hour-slot.type";

const couriers: Courier[] = [
  { name: "Alex", limit: 6 },
  { name: "Oksana", limit: 4 },
  { name: "Ihor", limit: 8 },
]

const hours = [10, 11, 12, 13, 14, 15, 16, 17]

const hourSlots: HourSlot[] = [
  { hour: 10, load: { Alex: 5, Oksana: 3, Ihor: 7 } },
  { hour: 11, load: { Alex: 4, Oksana: 4, Ihor: 6 } },
  { hour: 12, load: { Alex: 6, Oksana: 2, Ihor: 8 } },
  { hour: 13, load: { Alex: 5, Oksana: 4, Ihor: 5 } },
  { hour: 14, load: { Alex: 4, Oksana: 3, Ihor: 7 } },
  { hour: 15, load: { Alex: 6, Oksana: 4, Ihor: 6 } },
  { hour: 16, load: { Alex: 7, Oksana: 3, Ihor: 5 } },
  { hour: 17, load: { Alex: 3, Oksana: 2, Ihor: 4 } },
]

export function DayBoard() {
  const getOverload = (courierName: string, load: number) => {
    const courier = couriers.find((c) => c.name === courierName)
    if (!courier) return 0
    return load > courier.limit ? load - courier.limit : 0
  }

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Day board</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left font-medium">Courier</th>
                {hours.map((hour) => (
                  <th key={hour} className="border p-2 text-center font-medium">
                    {formatHour(hour)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {couriers.map((courier) => (
                <tr key={courier.name}>
                  <td className="border p-2 font-medium">
                    {courier.name}
                    <span className="text-muted-foreground text-sm ml-2">
                      (limit: {courier.limit})
                    </span>
                  </td>
                  {hours.map((hour) => {
                    const slot = hourSlots.find((s) => s.hour === hour)
                    const load = slot?.load[courier.name] || 0
                    const overload = getOverload(courier.name, load)

                    return (
                      <td
                        key={`${courier.name}-${hour}`}
                        className="border p-3 text-center cursor-pointer hover:bg-accent transition-colors"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-lg font-semibold">{load}</span>
                          {overload > 0 && (
                            <span className="text-xs text-destructive font-medium">
                              over +{overload}
                            </span>
                          )}
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-80 space-y-6">
        <UnassignedOrders />
        <Notes />
      </div>
    </div>
  )
}

