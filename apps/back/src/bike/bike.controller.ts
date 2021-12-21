import { Controller, Body, HttpStatus, HttpCode, Post, Put, Delete } from '@nestjs/common';
import {BikeService} from './bike.service';

@Controller('bike')
export class BikeController {

  constructor(private bikeService: BikeService) {

  }

  @Post('bike/addBike')
  @HttpCode(HttpStatus.OK)
  create(@Body() bike) {
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
