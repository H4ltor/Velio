import { Injectable } from '@nestjs/common';
import { usersResourcePath } from '@velio/velio-model';

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

@Injectable()
export class UsersService {
  db = getFirestore();

  async getById(id) {
    const docRef = doc(this.db, usersResourcePath, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
    }
  }

  async updateUser(id, obj) {
    await updateDoc(doc(this.db, usersResourcePath, id), obj);
    return `Update ${id} ok`;
  }
  async delete(id) {
    await deleteDoc(doc(this.db, usersResourcePath, id));
    return `Delete ${id} ok`;
  }
}
