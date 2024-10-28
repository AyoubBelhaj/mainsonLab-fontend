import { Component, OnInit } from '@angular/core';
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

  constructor(private propertyService: PropertyService) {

  }

  ngOnInit(): void {
    console.log("nice");
  }

  searchProperty(key: any) {
    const results : Property[] = [] ;
    for (const property of this.propertyService.properties) {
      if(property.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.description.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.type.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.status.toLowerCase().indexOf(key.toLowerCase()) !== -1 || property.location.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(property);
      }
    }
    this.propertyService.properties = results ;
    console.log(results);
    console.log(":",this.propertyService.properties);
    
    if(results.length === 0 || !key ) {
      this.propertyService.getProperties() ;
    }
  }

}
