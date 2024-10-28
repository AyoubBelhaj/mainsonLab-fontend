import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property } from '../../../models/property';
import { PropertyService } from '../../../services/property.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{

  public property! : Property;
  public properties : Property[];

  constructor(private propertyService : PropertyService){
    this.properties = [] ;
  }
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.properties = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /* properties = [
    { title: 'Large 4-room apartment with a beautiful terrace', price: '2500 DTN', location: 'Nabeul', img: '../../../../assets/images/maison.png' },
    { title: '5i large design apartment with terrace', price: '3000 DTN', location: 'Tunis', img: '../../../../assets/images/maison3.png' },
    { title: 'Magnificent duplex in a private villa', price: '1500 DTN', location: 'Sousse', img: '../../../../assets/images/maison2.png'},
    { title: 'Large 4-room apartment with a beautiful terrace', price: '2500 DTN', location: 'Nabeul', img: '../../../../assets/images/maison.png' },
    { title: 'Card title 5', price: '3000 DTN', location: 'Tunis', img: '../../../../assets/images/maison3.png' },
    { title: 'Card title 6', price: '1500 DTN', location: 'Sousse', img: '../../../../assets/images/maison2.png' },
    { title: 'Large 4-room apartment with a beautiful terrace', price: '2500 DTN', location: 'Nabeul', img: '../../../../assets/images/maison.png' },
    { title: '5i large design apartment with terrace', price: '3000 DTN', location: 'Tunis', img: '../../../../assets/images/maison3.png' },
    { title: 'Magnificent duplex in a private villa', price: '1500 DTN', location: 'Sousse', img: '../../../../assets/images/maison2.png' },
  ]; */
}
