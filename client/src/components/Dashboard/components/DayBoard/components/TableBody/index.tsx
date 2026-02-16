import type { CourierWithLoad } from "@/common/types/courier.type";
import type { HourSlotType } from "@/common/types/hour-slot.type";
import type { LoadBySlot } from "@/common/types/hour-slot.type";
import { Orders } from "@/components/Orders";
import { OverloadIndicator } from "../OverloadIndicator";

type Props = {
  couriers: CourierWithLoad[];
  slots: HourSlotType[];
}

export const TableBody: React.FC<Props> = ({ couriers, slots }) => {
  return (
    <tbody>
      {couriers.map((courierWithLoad: CourierWithLoad) => {
        const { courier, loadBySlot } = courierWithLoad;
        return (
          <tr key={courier.id}>
            <td className="border p-2 font-medium">
              {courier.name}
              <span className="text-muted-foreground text-sm ml-2">
                (limit: {courier.hourlyLimit})
              </span>
            </td>
            {slots.map((hour) => {
              const slot = loadBySlot.find((s: LoadBySlot) => s.hour === hour);
              const load = slot?.load ?? 0;
              const overload = slot?.overload ?? 0;
              const orders = slot?.orders ?? [];

              return (
                <td
                  key={`${courier.id}-${hour}`}
                  className="border text-center cursor-pointer hover:bg-accent transition-colors"
                >
                  <Orders 
                    orders={orders}
                    triggerElement={
                      <div className="flex flex-col items-center gap-1 p-3">
                        <span className="text-lg font-semibold">{load}</span>
                        <OverloadIndicator 
                          overload={overload}
                        />
                      </div>
                    }
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  )
}
