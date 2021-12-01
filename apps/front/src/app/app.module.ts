import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { VelioRoutingModule } from './velio-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, FooterComponent],
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
