import { AddCourier } from "../AddCourier";
import { AddOrder } from "../AddOrder";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type HeaderProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ selectedDate, onDateChange }) => {
  return (
    <header className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4 p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        Courier Load Planner — Day View
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <div className="flex gap-2 items-center">
          <Label htmlFor="date-header" className="whitespace-nowrap">Date:</Label>
          <Input 
            id="date-header" 
            name="date" 
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full sm:w-auto"
          />
        </div>
        <div className="flex gap-2">
          <AddCourier />
          <AddOrder selectedDate={selectedDate} />
        </div>
      </div>
    </header>
  );
}