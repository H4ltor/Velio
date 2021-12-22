import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VelioRoutingModule } from './velio-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './Components/public/main/main.component';
import { NavComponent } from './Components/public/nav/nav.component';
import { FooterComponent } from './Components/public/footer/footer.component';
import { ListBikesComponent } from './Components/Manager/list-bikes/list-bikes.component';
import { ListParksComponent } from './Components/Manager/list-parks/list-parks.component';
import { CreateParkComponent } from './Components/Admin/Create/create-park/create-park.component';
import { ShowParkComponent } from './Components/Admin/Show/show-park/show-park.component';
import { ShowBikeComponent } from './Components/Admin/Show/show-bike/show-bike.component';
import { CreateBikeComponent } from './Components/Admin/Create/create-bike/create-bike.component';
import { MaterialModule } from './_shared/material/material.module';
import { RegisterComponent } from './Components/Connection/register/register.component';
import { LoginComponent } from './Components/Connection/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './Components/public/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { ParksService} from './Services/parks.service';
import { BikesService} from './Services/bikes.service';
import { FormsModule } from '@angular/forms';
//firebase
import { environment} from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [AppComponent, MainComponent,
    NavComponent, FooterComponent,
    ListBikesComponent, ListParksComponent,
    CreateParkComponent, ShowParkComponent,
    ShowBikeComponent, CreateBikeComponent, RegisterComponent, LoginComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    VelioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule,
  ],
  providers: [ParksService,
              BikesService],
  bootstrap: [AppComponent,],
  entryComponents: [CreateParkComponent],
})
export class AppModule {}
