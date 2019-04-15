import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { VisionComponent } from './components/vision/vision.component';
import { ManagementComponent } from './components/management/management.component';
import { TrackScrollDirective } from './track-scroll.directive';

import {SharedService} from './services/shared.service';
import { CapacityComponent } from './components/capacity/capacity.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    ManagementComponent,
    TrackScrollDirective,
    HomeComponent,
    VisionComponent,
    CapacityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
