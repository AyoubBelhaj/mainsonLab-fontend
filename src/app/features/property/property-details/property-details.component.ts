import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property';
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit{
  propertyId: number | null = null; 
  property: Property | undefined;  

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id) {
      this.propertyId = +id; 
      this.getOneProperties(this.propertyId);
    } else {
      console.error('No property ID found in route');
    }
  }

  getOneProperties(id: number) {
    this.propertyService.getOneProperties(id).subscribe(
      (property: Property) => {
        this.property = property;
      },
      (error) => {
        console.error('Error fetching property details:', error);
      }
    );
  }
  next() {
    const carousel = document.getElementById('topOffersCarousel')!;
    carousel.scrollLeft += 220;
  }

  prev() {
    const carousel = document.getElementById('topOffersCarousel')!;
    carousel.scrollLeft -= 220;
  }
}
