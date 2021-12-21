import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
//import { ParkI} from '../models/park.interface';
import {ParkDto, parksResourcePath, listParksResourcePath} from '@velio/velio-model';
import { HttpClient } from '@angular/common/http';
export interface ParkID extends ParkDto { id: string; }
@Injectable({
  providedIn: 'root'
})
export class ParksService {
  private parkCollection: AngularFirestoreCollection<ParkDto>;
  parks: Observable<ParkDto[]>;
  selected: any;

  constructor(private readonly afs:AngularFirestore, private http: HttpClient) {
    this.parkCollection = afs.collection<ParkDto>('parks');
    this.parks = this.parkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ParkDto;
        const id = a.payload.doc.id;
        return { id, ...data};

      }))
    )
  }

  getAllParks() {
    //return tous les parks
    return this.parks;
  }

  editPark(park: ParkDto) {
    //let id:  string = '';
    return this.parkCollection.doc(park.id).update(park);
    /*
    * 1. Saisie des données HTML
    * 2. Récup des données du formulaire HTML vers le TS
    * 3. Envoyer ces données sur une route ('/api/park/create', '/api/park/update/${id}') via le fichier park.controller
    * 4. Appeler une méthode du service 'park.service.ts' (createBike, updateBike)
    * 5. Ces méthodes enregistrent / update les données de firebase
    * 6. La fonction du service renvoie un succès ou une erreur en fonction du status (CODE HTTP)
     */

    // Exemple bike service
    /*
      return this.http.put('/api/bike/${id}', bike);
    */
    // Exemple bike controller
    /*
    @Controller('bike')
     @Put(':id')
    updateBikes(
        @Param('id') id: string,
        @Body() putDto: BikeDto
    ) {
        return this.bikesService.updateBike(id, putDto);
    }
     */
  }

  deletePark(id: string) {
    console.log(id);
    return this.http.delete(`api/park/deletePark/${id}`);
    //return this.parkCollection.doc(id).delete();
  }

  addPark(park: ParkDto) {
    return this.http.post('/api/park/addPark', park);
      //return this.parkCollection.add(park);
  }
}
