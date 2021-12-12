import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Components/public/home/home.component';
import { ListParksComponent } from './Components/Manager/list-parks/list-parks.component';
import { ListBikesComponent } from './Components/Manager/list-bikes/list-bikes.component';
import { CreateBikeComponent } from './Components/Admin/Create/create-bike/create-bike.component';
import { CreateParkComponent } from './Components/Admin/Create/create-park/create-park.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create-bikes', component: CreateBikeComponent},
  {path: 'create-parks', component: CreateParkComponent},
  {path: 'list-parks', component: ListParksComponent},
  {path: 'list-bikes', component: ListBikesComponent},
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
