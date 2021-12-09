import { Injectable } from '@nestjs/common';
import { UserDto, usersResourcePath } from '@velio/velio-model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  deleteUser,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import Swal from 'sweetalert2';

@Injectable()
export class AuthService {
  user: UserDto;

  db = getFirestore();
  auth = getAuth();

  provider = new GoogleAuthProvider();


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

      })
      .catch((error) => {
        console.log('error: ', error);
      });

    return this.user;
  };

  /**
   * Sign up
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   */
  signUp = (userDto: UserDto) => {
    createUserWithEmailAndPassword(this.auth, userDto.email, userDto.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(`Error in creation of the user : ${error.message}`);
      });
    return this.user
  };

  /**
   * Reset password
   * @param emailAddress
   */
  resetPassword = (emailAddress: string) => {
    sendPasswordResetEmail(this.auth, emailAddress)
      .then(() => {
        // Email sent
        console.log('Email sent !');

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `E-mail has been sent to ${emailAddress}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error occurred
        console.log('error: ', error);
        Swal.fire({
          icon: 'error',
          title: error,
          showConfirmButton: true,
        });
      });
  };

  /**
   * Update password
   * @param password
   */
  updatePassword = (newPassword: string) => {
    const user = this.auth.currentUser;

    updatePassword(user, newPassword)
      .then(() => {
        console.log('Password has been successfully updated');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Password has been successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error: string) => {
        console.log('error: ', error);
        Swal.fire({
          icon: 'error',
          title: error,
          showConfirmButton: true,
        });
      });
  };

  /**
   * Sign out the user
   */
  signOut = () => {
    signOut(this.auth)
      .then(() => {
        // this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  /**
   * Delete account
   */
  deleteAccount = () => {
    const user = this.auth.currentUser;
    const userId = this.auth.currentUser.uid;

    deleteUser(user)
      .then(async () => {
        console.log('All data of the user has been deleted');

        await deleteDoc(doc(this.db, 'users', userId))
          .then(() => {
            // User deleted.
            console.log('User has been deleted');

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `User has been deleted`,
              showConfirmButton: false,
              timer: 1500,
            });

            // Go to sign up
            // this.router.navigate(['/sign-up']);
          })
          .catch((error) => {
            console.log(`Error while deleting the user : ${error}`);

            Swal.fire({
              icon: 'error',
              title: error,
              showConfirmButton: true,
            });
          });
      })
      .catch((error) => {
        console.error(`Error deleting data of user : ${error}`);

        Swal.fire({
          icon: 'error',
          title: error,
          showConfirmButton: true,
        });
      });
  };

  async findAll() {
    const querySnapshot = await getDocs(collection(this.db, usersResourcePath));
    const datatab = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      datatab.push(doc.data());
    });
    return datatab;
  }
}
