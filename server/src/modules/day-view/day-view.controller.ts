import { Controller, Get, Query } from '@nestjs/common';
import { DayViewService } from './day-view.service';
import { DayViewResponseDto } from './dto/day-view-response.dto';
import { DayViewQueryDto } from './dto/day-view-query.dto';

@Controller('day-view')
export class DayViewController {
  constructor(private readonly dayViewService: DayViewService) {}

  @Get()
  async getDayView(@Query() query: DayViewQueryDto): Promise<DayViewResponseDto> {
    return this.dayViewService.getDayView(query.date);
  }
}

