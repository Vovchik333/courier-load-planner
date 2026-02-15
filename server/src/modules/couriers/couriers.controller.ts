import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCourierDto } from './dto/create-courier.dto';
import { CouriersService } from './couriers.service';

@Controller('couriers')
export class CouriersController {
  constructor(private readonly couriersService: CouriersService) {}
  
  @Post()
  create(@Body() createCourierDto: CreateCourierDto) {
    return this.couriersService.create(createCourierDto);
  }

  @Get()
  findAll() {
    return this.couriersService.findAll();
  }
}
