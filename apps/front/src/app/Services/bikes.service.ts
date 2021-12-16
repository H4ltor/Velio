import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {BikeI} from '../models/bike.interface';

export interface BikeID extends BikeI { id: string;}
@Injectable({
  providedIn: 'root'
})
export class BikesService {
  private bikeCollection: AngularFirestoreCollection<BikeI>;
  bikes: Observable<BikeI[]>;

  constructor(private readonly afs:AngularFirestore) {
    this.bikeCollection = afs.collection<BikeI>('bikes');
    this.bikes = this.bikeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as BikeI;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    )
  }

  getAllBikes() {
    //return tous les bikes
    return this.bikes;
  }

  editBikes(bikes: BikeI) {
    //let id:  string = '';
    return this.bikeCollection.doc(bikes.id).update(bikes);

  }

  deleteBike(id: string) {
    return this.bikeCollection.doc(id).delete();
  }

  addBike(bike: BikeI) {
    return this.bikeCollection.add(bike);
  }
}
