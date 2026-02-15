export type Order = {
  id: string;
  date: string;
  scheduledHour: number;
  workUnits: number;
  courierId: string | null;
};
