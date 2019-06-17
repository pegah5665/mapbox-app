import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import { environment } from '../environments/environment';

import {GeoJson} from './map'
import * as mapboxgl from 'mapbox-gl'


//https://www.youtube.com/watch?v=Zn3Xx-TSrM8
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  getMarkers(): AngularFireList<any> {
    return this.db.list('/markers')
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers')
                  .push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
  }
}
