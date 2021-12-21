import { Module } from '@nestjs/common';
import {ParkController} from './park.controller';
import {ParkService} from './park.service';

@Module({
  controllers: [ParkController],
  providers:[ParkService],

})
export class ParkModule {}

