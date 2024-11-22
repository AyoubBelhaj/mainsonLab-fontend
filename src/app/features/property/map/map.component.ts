import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v10';
  lat: number = 30.2672;
  lng: number = -97.7431;
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: process.env['MAPBOX_API_TOKEN'],
      container: 'map',
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}
