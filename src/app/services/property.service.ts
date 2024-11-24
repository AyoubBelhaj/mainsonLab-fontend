import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties : Property[];

  private apiServerUrl = "http://localhost:8081/api/properties" ;

  constructor(private http: HttpClient) {
    this.properties = [] ;
   }

  public getProperties() : Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiServerUrl}/all`);
  }

  public addProperty(property: Property) :  Observable<Property> {
    return this.http.post<Property>(`${this.apiServerUrl}/add`,property);
  }

  public getOneProperties(id : number) : Observable<Property> {
    return this.http.get<Property>(`${this.apiServerUrl}/${id}`);
  }

  public filterByPriceRange(minPrice : number, maxPrice : number) : Observable<Property[]> {
    let params = new HttpParams().set("minPrice",minPrice).set("maxPrice", maxPrice); 
    return this.http.get<Property[]>(`${this.apiServerUrl}/filter/price`,{params: params});
  }

  public filterByBedrooms(bedrooms : number) : Observable<Property[]> {
    let params = new HttpParams().set("bedrooms",bedrooms); 
    return this.http.get<Property[]>(`${this.apiServerUrl}/filter/bedrooms`,{params: params});
  }

  public filterByType(type : string) : Observable<Property[]> {
    let params = new HttpParams().set("type",type); 
    return this.http.get<Property[]>(`${this.apiServerUrl}/filter/type`,{params: params});
  }  

  public searchByKeywors(keyword : string) : Observable<Property[]> {
    let params = new HttpParams().set("keyword",keyword); 
    return this.http.get<Property[]>(`${this.apiServerUrl}/search`,{params: params});
  }
}
