import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-offers.component.html',
  styleUrl: './top-offers.component.css'
})
export class TopOffersComponent implements OnInit{

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.offers = response;  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(private propertyService: PropertyService) { }
  offers = this.propertyService.properties;
  offersnah = [
    { title: 'Offer 1', description: 'Description for Offer 1', image: 'assets/offer1.jpg' },
    { title: 'Offer 2', description: 'Description for Offer 2', image: 'assets/offer2.jpg' },
    { title: 'Offer 3', description: 'Description for Offer 3', image: 'assets/offer3.jpg' },
    { title: 'Offer 4', description: 'Description for Offer 4', image: 'assets/offer4.jpg' },
    { title: 'Offer 1', description: 'Description for Offer 1', image: 'assets/offer1.jpg' },
    { title: 'Offer 2', description: 'Description for Offer 2', image: 'assets/offer2.jpg' },
    { title: 'Offer 3', description: 'Description for Offer 3', image: 'assets/offer3.jpg' },
    { title: 'Offer 4', description: 'Description for Offer 4', image: 'assets/offer4.jpg' },
  ];

  next() {
    const carousel = document.getElementById('topOffersCarousel')!;
    carousel.scrollLeft += 220;
  }

  prev() {
    const carousel = document.getElementById('topOffersCarousel')!;
    carousel.scrollLeft -= 220;
  }
}
