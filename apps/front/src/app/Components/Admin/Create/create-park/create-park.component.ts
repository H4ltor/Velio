import { Component, OnInit, Inject } from '@angular/core';
import { ParksService} from '../../../../Services/parks.service';
import {ParkI} from '../../../../models/park.interface';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'velio-create-park',
  templateUrl: './create-park.component.html',
  styleUrls: ['./create-park.component.scss']
})
export class CreateParkComponent {

  park: ParkI;

  constructor(public parkService: ParksService) { }

  onSaveForm(): void {
    if (this.park.id === null) {
       const newPark = {
         id: this.park.id,
        name: this.park.name,
        city: this.park.city,
        postalCode: this.park.postalCode
      }
      this.parkService.addPark(newPark);
    } else {
      this.parkService.editPark(this.park);
    }
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
