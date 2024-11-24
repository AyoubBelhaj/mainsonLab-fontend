import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './top-offers.component.html',
  styleUrl: './top-offers.component.css'
})
export class TopOffersComponent implements OnInit {
  selectedType: string = '';
  searchLocation: string = '';
  filteredOffers: Property[] = [];
  offers: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.offers = response;
        this.filteredOffers = [...this.offers]; // Default to showing all offers
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
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

  filterOffers() {
    if (this.selectedType || this.searchLocation) {
      this.filteredOffers = this.offers.filter((offer) => {
        const matchesType = this.selectedType ? offer.type === this.selectedType : true;
        const matchesLocation = this.searchLocation
          ? offer.location.toLowerCase().includes(this.searchLocation.toLowerCase())
          : true;
        return matchesType && matchesLocation; // Use AND logic for both filters
      });
    } else {
      this.filteredOffers = [...this.offers]; // Reset to show all offers if no filter is applied
    }
  }
}
