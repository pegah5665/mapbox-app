export class Map {
}

export interface IGeometry{
    type: String;
    coordinates: Number[];
}

export interface IGeoJson{
    type: String;
    geometry: IGeometry;
    properties?: any;
    $key? : String;
}

export class GeoJson implements IGeoJson{
    type: 'Feature';
    geometry: IGeometry;
    constructor(coordinates, public properties? ){
        this.geometry= {
            type: 'Point',
            coordinates: coordinates
        }
    }
}


export class FeatureCollection{
    type: 'FeatureCollection';

    constructor(public featur: Array <GeoJson>){

    }
}