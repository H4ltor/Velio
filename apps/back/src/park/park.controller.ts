import { Controller, Body, HttpCode, HttpStatus, Post, Put, Delete} from '@nestjs/common';
import { ParkService } from './park.service';
import { ParkDto } from '@velio/velio-model';


@Controller('park')
export class ParkController {

  constructor(private parkService: ParkService) {

  }
  //body = envoi
  @Post('addPark')
  @HttpCode(HttpStatus.OK)
  create(@Body() park: ParkDto) {
    console.log(park);
    return this.parkService.addPark(park);
  }

  @Delete('park/deletePark')
  @HttpCode(HttpStatus.OK)
  delete(@Body() id) {
    return this.parkService.deletePark(id);
  }

  @Put('park/:id')
  @HttpCode(HttpStatus.OK)
  edit(@Body() id, park: ParkDto) {
    return this.parkService.editPark(id, park);
  }
  //@Patch('park/editPark')




}
