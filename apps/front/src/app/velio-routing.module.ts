import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './Components/public/main/main.component';
import { ListParksComponent } from './Components/Manager/list-parks/list-parks.component';
import { ListBikesComponent } from './Components/Manager/list-bikes/list-bikes.component';
import { CreateBikeComponent } from './Components/Admin/Create/create-bike/create-bike.component';
import { CreateParkComponent } from './Components/Admin/Create/create-park/create-park.component';
import {RegisterComponent} from "./Components/Connection/register/register.component";
import {LoginComponent} from "./Components/Connection/login/login.component";
import {HomeComponent} from "./Components/public/home/home.component";
import {MapComponent} from "./Components/public/map/map.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'create-bikes', component: CreateBikeComponent},
  {path: 'create-parks', component: CreateParkComponent},
  {path: 'list-bikes', component: ListBikesComponent},
  {path: 'list-parks', component: ListParksComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class VelioRoutingModule { }
