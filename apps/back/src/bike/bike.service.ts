import { Injectable, HttpException, HttpStatus, } from '@nestjs/common';
import {collection, doc, addDoc, onSnapshot } from 'firebase/firestore';
import { deleteField, getDoc, getFirestore, updateDoc} from '@angular/fire/firestore';

@Injectable()
export class BikeService {

  db = getFirestore();

  async addBike(bike) {
    const docRef = await addDoc(collection(this.db, "bike"), {
      name: bike.id,
      city: bike.model,
      number: bike.number,
      postalCode: bike.postalCode,

    });
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
    }
  }

  async editBike(id,bike) {

    return await updateDoc(doc(this.db, 'bike', id), bike);
  }

  async deleteBike(id) {
    const docRef = doc(this.db, 'bike', id);
    return await updateDoc(docRef, {
      name: deleteField(),
      city: deleteField(),
      postalCode: deleteField(),
    });
  }
}
