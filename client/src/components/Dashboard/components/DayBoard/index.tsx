import { formatHour } from "@/helpers/date.helper";
import type { HourSlotType } from "@/common/types/hour-slot.type";
import type { CourierWithLoad } from "@/common/types/courier.type";
import { TableHead } from "./components/TableHead";
import { TableBody } from "./components/TableBody";

type Props = {
  slots: HourSlotType[];
  couriers: CourierWithLoad[];
};

export const DayBoard: React.FC<Props> = ({ 
  slots,
  couriers
}) => {
  const firstSlot = formatHour(slots[0]);
  const lastSlot = formatHour(slots[slots.length - 1]);

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <h2 className="text-xl font-semibold mb-4">Day board ({(firstSlot)} - {lastSlot})</h2>
      <div className="rounded-lg overflow-hidden flex-1 flex flex-col min-h-0">
        <div className="overflow-y-auto flex-1">
          <table className="w-full border-collapse">
            <TableHead slots={slots} />
            <TableBody couriers={couriers} slots={slots} />
          </table>
        </div>
      </div>
    </div>
  );
}
