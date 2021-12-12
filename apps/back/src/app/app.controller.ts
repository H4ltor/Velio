import { Controller } from '@nestjs/common';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../../config';

@Controller()
export class AppController {
  constructor() {
    initializeApp(firebaseConfig);
  }
}
