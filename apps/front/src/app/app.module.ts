import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VelioRoutingModule } from './velio-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListBikesComponent } from './Manager/list-bikes/list-bikes.component';
import { ListParksComponent } from './Manager/list-parks/list-parks.component';
import { CreateParkComponent } from './Admin/Create/create-park/create-park.component';
import { ShowParkComponent } from './Admin/Show/show-park/show-park.component';
import { ShowBikeComponent } from './Admin/Show/show-bike/show-bike.component';
import { CreateBikeComponent } from './Admin/Create/create-bike/create-bike.component';


@NgModule({
  declarations: [AppComponent, HomeComponent,
    NavComponent, FooterComponent,
    ListBikesComponent, ListParksComponent,
    CreateParkComponent, ShowParkComponent,
    ShowBikeComponent, CreateBikeComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
    VelioRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
