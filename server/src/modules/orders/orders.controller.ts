import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { AssignOrderDto } from './dto/assign-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Patch('/:id/assign')
  assign(
    @Param('id') id: string, 
    @Body() assignOrderDto: AssignOrderDto
  ) {
    return this.ordersService.assign(id, assignOrderDto);
  }

  @Patch('/:id')
  updateOne(
    @Param('id') id: string,
    @Body() payload: UpdateOrderDto
  ) {
    return this.ordersService.updayeOne(id, payload);
  }
}
