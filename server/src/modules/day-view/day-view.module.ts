import { Module } from '@nestjs/common';
import { DayViewController } from './day-view.controller';
import { DayViewService } from './day-view.service';

@Module({
  controllers: [DayViewController],
  providers: [DayViewService],
})
export class DayViewModule {}

