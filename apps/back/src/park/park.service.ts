import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import { deleteField, getDoc, getFirestore, updateDoc } from '@angular/fire/firestore';

@Injectable()
export class ParkService {

  db = getFirestore();

  async addPark(park) {
    const docRef = await addDoc(collection(this.db, "park"), {
      name: park.name,
      city: park.city,
      postalCode: park.postalCode ,

    });
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
    }
  }

  async editPark(id,park) {
    //const docRef = doc(this.db, 'park', id);
    //return await updateDoc(docRef);
    return await updateDoc(doc(this.db, 'park', id), park);
  }

  async deletePark(id) {
    const docRef = doc(this.db, 'park', id);
     return await updateDoc(docRef, {
        name: deleteField(),
        city: deleteField(),
        postalCode: deleteField(),
      });
  }

}

