import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

//https://stackoverflow.com/questions/43772474/no-provider-for-angularfiredatabase-angularfireauth
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent
  ],
  imports: [

    AngularFireModule.initializeApp({  
      apiKey: 'AIzaSyAXncQXnFfPCli916rz-3aJBR7AkQfWXkk',
      databaseURL: 'https://mapboxangular-c536c.firebaseio.com/',}),

    RouterModule.forRoot([
      {path: '', component: MapBoxComponent},

    ]),

    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
