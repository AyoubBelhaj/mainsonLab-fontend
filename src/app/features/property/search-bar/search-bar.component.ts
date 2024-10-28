import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { PropertyService } from '../../../services/property.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Property } from '../../../models/property';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatSliderModule, CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {



  @Output() searchEvent = new EventEmitter<string>();
  @Output() filterEvent = new EventEmitter<any>();

  selectedType: string = '';
  selectedRooms: number = 0;
  selectedLocation: string = '';
  selectedSort: string = '';
  minPrice: number = 0;
  maxPrice: number = 1000000;

  ngOnInit(): void { }

  searchProperty(keyword: string) {
    this.searchEvent.emit(keyword);
  }

  onFilterChange() {
    console.log('Filters changed:', {
      type: this.selectedType,
      rooms: this.selectedRooms,
      location: this.selectedLocation,
      sort: this.selectedSort,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });
    this.filterEvent.emit({
      type: this.selectedType,
      rooms: this.selectedRooms,
      location: this.selectedLocation,
      sort: this.selectedSort,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });
  }

  onSelectedSort(event: any) {
    this.selectedSort = event?.value;
    this.onFilterChange();
  }
  onSelectedLocation(event: any) {
    this.selectedLocation = event?.value ;
    this.onFilterChange();
  }
  onSelectedRooms(event: any) {
    this.selectedRooms = event?.value ;
    this.onFilterChange() ;
  }
  onSelectedType(event: any) {
    this.onSelectedType = event ;
    this.onFilterChange() ;
  }


  /* searchProperty(key: any) {
    const results: Property[] = [];
    for (const property of this.propertyService.properties) {
      if (property.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.type.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.status.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.location.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(property);
      }
    }
    this.propertyService.properties = results;
    console.log(results);
    console.log(":", this.propertyService.properties);

    if (results.length === 0 || !key) {
      this.propertyService.getProperties();
    }
  } */

}
