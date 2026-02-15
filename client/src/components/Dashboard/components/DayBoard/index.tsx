import { formatHour } from "@/helpers/date.helper";
import { Orders } from "../../../Orders";
import type { HourSlotType } from "@/common/types/hour-slot.type";
import type { CourierWithLoad } from "@/common/types/courier.type";
import type { LoadBySlot } from "@/common/types/hour-slot.type";

type Props = {
  slots: HourSlotType[];
  couriers: CourierWithLoad[];
};

export const DayBoard: React.FC<Props> = ({ 
  slots,
  couriers
}) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">Day board</h2>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-2 text-left font-medium">Courier</th>
              {slots.map((hour) => (
                <th key={hour} className="border p-2 text-center font-medium">
                  {formatHour(hour)}
                </th>
              ))}
            </tr>
          </thead>
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
                    const load = slot?.load || 0;
                    const overload = slot?.overload || 0;
                    const orders = slot?.orders || [];

                    return (
                      <td
                        key={`${courier.id}-${hour}`}
                        className="border p-3 text-center cursor-pointer hover:bg-accent transition-colors"
                      >
                        <Orders 
                          orders={orders}
                          triggerElement={
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-lg font-semibold">{load}</span>
                              {overload > 0 && (
                                <span className="text-xs text-destructive font-medium">
                                  over +{overload}
                                </span>
                              )}
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
        </table>
      </div>
    </div>
  );
}
