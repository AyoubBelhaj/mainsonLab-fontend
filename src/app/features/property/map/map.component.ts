import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  mapboxApiKey = environment.mapboxApiKey;
  
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v10';
  lat: number = 30.2672;
  lng: number = -97.7431;
  ngOnInit() {
    console.log("api",this.mapboxApiKey);
    this.map = new mapboxgl.Map({
      accessToken: this.mapboxApiKey,
      container: 'map',
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}
