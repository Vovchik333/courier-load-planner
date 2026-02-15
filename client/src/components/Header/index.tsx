import { AddCourier } from "../AddCourier";
import { AddOrder } from "../AddOrder";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        Courier Load Planner — Day View
      </h1>
      <div className="flex gap-2">
        <Label htmlFor="date-header">Date:</Label>
        <Input id="date-header" name="date" type="date"/>
      </div>
      <div className="flex gap-2">
        <AddCourier />
        <AddOrder />
      </div>
    </header>
  );
}