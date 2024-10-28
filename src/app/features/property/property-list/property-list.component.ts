import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../../models/property';
import { PropertyService } from '../../../services/property.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Property[] = [];
  public originalProperties: Property[] = []; 
  public displayedProperties: Property[] = [];
  public numberOfItemsPerPage : number = 9 ;
  public currentPage : number = 1 ;

  @Input() filters: any;
  @Input() searchKeyword: string = '';

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  ngOnChanges(): void {
    this.applyFilters(); 
  }

  getProperties() {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.originalProperties = response; 
        this.properties = [...this.originalProperties]; 
        this.applyFilters(); 
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  applyFilters() {
    this.properties = [...this.originalProperties]; 
    this.applyFiltersManually();
    this.sortProperties();
    this.updateDisplayedProperties();
  }

  applyFiltersManually() {
    if (this.searchKeyword) {
      this.searchProperty(this.searchKeyword);
    }

    if (this.filters) {
      if (this.filters.minPrice !== undefined && this.filters.maxPrice !== undefined) {
        this.properties = this.properties.filter(property => 
          property.price >= this.filters.minPrice && property.price <= this.filters.maxPrice
        );
      }

      if (this.filters.rooms) {
        this.properties = this.properties.filter(property => 
          property.bedrooms === parseInt(this.filters.rooms)
        );
      }

      if (this.filters.type) {
        this.properties = this.properties.filter(property => 
          property.type === this.filters.type
        );
      }

      if (this.filters.location) {
        this.properties = this.properties.filter(property => 
          property.location === this.filters.location
        );
      }
    }
    this.currentPage = 1;
    this.updateDisplayedProperties();
  }

  searchProperty(key: string) {
    const results: Property[] = this.originalProperties.filter(property => {
      return property.title.toLowerCase().includes(key.toLowerCase()) ||
             property.description.toLowerCase().includes(key.toLowerCase()) ||
             property.type.toLowerCase().includes(key.toLowerCase()) ||
             property.status.toLowerCase().includes(key.toLowerCase()) ||
             property.location.toLowerCase().includes(key.toLowerCase());
    });

    this.properties = results.length > 0 ? results : [...this.originalProperties];
  }

  sortProperties() {
    if (this.filters && this.filters.sort) {
      this.properties.sort((a, b) => {
        return this.filters.sort === "MostEx" ? b.price - a.price : a.price - b.price;
      });
    }
  }

  nextPage() {
    if ((this.currentPage * this.numberOfItemsPerPage) < this.properties.length) {
      this.currentPage++;
      this.updateDisplayedProperties();
    }
  }
  updateDisplayedProperties() {
    let startIndex = 0;
    let endIndex = this.currentPage * this.numberOfItemsPerPage ;
    this.displayedProperties = this.properties.slice(startIndex,endIndex);
  }
}
