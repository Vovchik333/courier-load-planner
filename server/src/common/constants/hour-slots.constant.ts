export const HOUR_SLOTS = [10, 11, 12, 13, 14, 15, 16, 17] as const;

export type HourSlot = typeof HOUR_SLOTS[number];
