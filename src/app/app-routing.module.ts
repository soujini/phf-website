import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {FeaturesComponent} from './components/features/features.component';
import {ManagementComponent} from './components/management/management.component';
import {ContactComponent} from './components/contact/contact.component';

declare var require:any;

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'contact', component: ContactComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ enableTracing: false}),
    // scrollPositionRestoration: 'enabled'
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
