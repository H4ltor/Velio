import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Components/home/home.component';
import { ListParksComponent } from './Manager/list-parks/list-parks.component';
import { ListBikesComponent } from './Manager/list-bikes/list-bikes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list-parks', component: ListParksComponent},
  {path: 'list-bikes', component: ListBikesComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class VelioRoutingModule { }
