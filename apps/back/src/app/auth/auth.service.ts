import { Injectable } from '@nestjs/common';
import { UserDto } from '@velio/velio-model';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc, } from 'firebase/firestore';
@Injectable()
export class AuthService {
  user: UserDto;

  db = getFirestore();
  auth = getAuth();

  async getAuth(): Promise<UserDto> {
    return this.user;
  }

  /**
   * Sign in
   * @param email
   * @param password
   */
  signIn = (userDto: UserDto) => {
    signInWithEmailAndPassword(this.auth, userDto.email, userDto.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Get user datas
        const docRef = doc(this.db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          //  Set data
          const userId = docSnap?.id;
          const firstName = docSnap.data()?.firstName;
          const lastName = docSnap.data()?.lastName;
          const email = docSnap.data()?.email;
          const role = docSnap.data()?.role;

          this.user = {
            userId: userId,
            email: email,
            password: null,
            firstName: firstName,
            lastName: lastName,
            role: role
          };

