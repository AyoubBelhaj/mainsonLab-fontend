import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiServerUrl = "http://localhost:8081/api" ;

  constructor(private http: HttpClient) { }

  public getProperties() : Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiServerUrl}/properties/all`);
  }
}
