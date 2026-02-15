import { Button } from "../ui/button";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
        Courier Load Planner — Day View
      </h1>
      <label className="flex items-center gap-2">
        <span>Date:</span>
        <input 
          type="date" 
          defaultValue="2026-02-13"
          className="border border-black rounded px-2 py-1 text-sm" 
        />
      </label>
      <div className="flex gap-2">
        <Button variant="outline" className="border-black">
          + Add Courier
        </Button>
        <Button variant="outline" className="border-black">
          + Add Order
        </Button>
      </div>
    </header>
  );
}