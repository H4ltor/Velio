import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
//import {BikeI} from '../models/bike.interface';
import {BikeDto} from '@velio/velio-model';
import { HttpClient } from '@angular/common/http';

export interface BikeID extends BikeDto { id: string;}
@Injectable({
  providedIn: 'root'
})
export class BikesService {
  bikes: Observable<BikeDto[]>;
  selected: any;

  constructor(private http: HttpClient) {
    /*this.bikeCollection = afs.collection<BikeDto>('bikes');
    this.bikes = this.bikeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as BikeDto;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    )*/

  }

  getAllBikes() {
    //return tous les bikes
    return this.bikes;
  }

  editBikes(bikes: BikeDto) {
    //let id:  string = '';


  }

  deleteBike(id: string) {

  }

  addBike(bike: BikeDto) {
    return this.http.post('api/bike/addBike', bike);
  }
}
