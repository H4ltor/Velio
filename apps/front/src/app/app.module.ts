import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VelioRoutingModule } from './velio-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { MapComponent } from './Components/public/map/map.component';



@NgModule({
  declarations: [AppComponent, MainComponent,
    NavComponent, FooterComponent,
    ListBikesComponent, ListParksComponent,
    CreateParkComponent, ShowParkComponent,
    ShowBikeComponent, CreateBikeComponent, RegisterComponent, LoginComponent, HomeComponent, MapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
    VelioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
