import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  @Input() address: string = "";
  mapboxApiKey = environment.mapboxApiKey;

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v10';
  lat: number = 30.2672;
  lng: number = -97.7431;
  coordinates: { lng: number; lat: number } = { lng: 0, lat: 0 };

  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['address']) {
      console.log('Address updated:', this.address);
      this.geocodeAddress(this.address);
    }
  }

  geocodeAddress(address: string): void {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(this.address)}.json?access_token=${this.mapboxApiKey}&limit=1&country=TN&bbox=7.5,32.0,11.8,37.5`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        console.log("response", response);

        const match = response.features[0];
        if (match) {
          this.coordinates.lng = match.center[0];
          this.coordinates.lat = match.center[1];
          this.initializeMap(); // Initialize the map with the coordinates
        } else {
          console.error('No matching location found!');
        }
      },
      error: (error) => {
        console.error('Geocoding error:', error);
      }
    });
  }

  initializeMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken: this.mapboxApiKey,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: 14
    });

    // Add marker for the property
    new mapboxgl.Marker()
      .setLngLat([this.coordinates.lng, this.coordinates.lat])
      .addTo(this.map);

    // Add navigation controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
