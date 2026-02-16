import { useDayView } from "@/hooks/useDayView";
import { DayBoard } from "./components/DayBoard";
import { UnassignedOrders } from "./components/UnassignedOrders";
import { Notes } from "./components/Notes";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";

type Props = {
  date: string;
};

export const Dashboard: React.FC<Props> = ({ 
  date 
}) => {
  const { data, isLoading, error } = useDayView(date);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage isError={true} error={error} />;
  }

  if (!data) {
    return null;
  }

  const { slots, couriers, unassignedOrders } = data;
  const couriersList = couriers.map(c => c.courier);

  return (
    <div className="flex gap-6 h-full min-h-0">
      <DayBoard 
        slots={slots} 
        couriers={couriers} 
      />
      <div className="w-96 space-y-6 flex-shrink-0">
        <UnassignedOrders 
          orders={unassignedOrders} 
          couriers={couriersList} 
        />
        <Notes />
      </div>
    </div>
  );
}
