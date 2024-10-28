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

  public properties : Property[] ;
  
  constructor(private propertyService : PropertyService){
   this.properties = [] ;
  }
  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.propertyService.properties = response;
        this.properties = this.propertyService.properties ;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
