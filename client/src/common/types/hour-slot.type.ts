export interface HourSlot {
  hour: number;
  load: { [courierName: string]: number };
}
