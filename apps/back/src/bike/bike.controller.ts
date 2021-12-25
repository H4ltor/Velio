import { Controller, Body, HttpStatus, HttpCode, Post, Put, Delete, Get } from '@nestjs/common';
import {BikeService} from './bike.service';
import { BikeDto, UserDto } from '@velio/velio-model';

@Controller('bike')
export class BikeController {

  constructor(private bikeService: BikeService) {

  }

  @Post('addBike')
  @HttpCode(HttpStatus.OK)
  create(@Body() bike: BikeDto) {
    console.log(bike);
    return this.bikeService.addBike(bike);
  }

  @Delete('bike/deleteBike')
  @HttpCode(HttpStatus.OK)
  delete(@Body() id) {
    return this.bikeService.deleteBike(id);
  }

  @Put('bike/:id')
  @HttpCode(HttpStatus.OK)
  edit(@Body() id, bike) {
    return this.bikeService.editBike(id, bike);
  }
}
