import { Component, OnInit} from '@angular/core';
import { BikesService} from '../../../../Services/bikes.service';
import {BikeI} from '../../../../models/bike.interface';

@Component({
  selector: 'velio-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.scss']
})
export class CreateBikeComponent {

  bike: BikeI;

  constructor(public bikeService: BikesService) { }

  onSaveForm(): void {
    if (this.bike.id === null) {
      const newBike = {
        id: this.bike.id,
        model: this.bike.model,
        number: this.bike.number,
      }
      this.bikeService.addBike(newBike);
    } else {
      this.bikeService.editBikes(this.bike);
    }
    this.close();
  }

  close(): void {
    // this.dialogRef.close();
  }

}
