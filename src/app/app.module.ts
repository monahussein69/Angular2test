import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ModalComponent } from './modal/modal.component';
import { OrderComponent } from './order/order.component';
import { ProviderLocationComponent } from './provider-location/provider-location.component';

import { AgmCoreModule } from '@agm/core';
import { StarRatingModule } from 'angular-star-rating';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

const routes: Routes = [
  { path: 'ProviderLocation', component: ProviderLocationComponent },
  { path: 'Order', component: OrderComponent },
  { path: '**', component: MapComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ModalComponent,
    OrderComponent,
    ProviderLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC7lIlL92St-a2bqweTt1lHqRYAFhguVg'
    }),
    StarRatingModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
