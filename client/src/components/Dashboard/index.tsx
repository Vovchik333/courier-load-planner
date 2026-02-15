import { useDayView } from "@/hooks/useDayView";
import { DayBoard } from "./components/DayBoard";
import { UnassignedOrders } from "./components/UnassignedOrders";
import { Notes } from "./components/Notes";

type Props = {
  date: string;
};

export const Dashboard: React.FC<Props> = ({ 
  date 
}) => {
  const { data, isLoading, error } = useDayView(date);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-destructive">Error: {error.message}</div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { slots, couriers, unassignedOrders } = data;

  return (
    <div className="flex gap-6">
      <DayBoard 
        slots={slots} 
        couriers={couriers} 
      />

      <div className="w-80 space-y-6">
        <UnassignedOrders orders={unassignedOrders} />
        <Notes />
      </div>
    </div>
  );
}
