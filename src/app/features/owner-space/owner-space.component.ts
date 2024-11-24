import { Component } from '@angular/core';
import { Property } from '../../models/property';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-owner-space',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './owner-space.component.html',
  styleUrl: './owner-space.component.css'
})
export class OwnerSpaceComponent {

  constructor(private http: HttpClient, private service: PropertyService) { }

  property: Property = {
    title: '',
    description: '',
    location: 'ariana',
    address: 'Mellita Jerba',
    price: 0,
    bedrooms: 0,
    type: '',
    imageUrl: '',
    videoUrl: '',
    status: '',
    furnished: false,
    utilities_included: false,
    area: 0,
    id: 0
  };

  owner = {
    name: '',
    phone: '',
    contact: '',
  };

  submitOwnerSpace() {
    console.log("property", this.property);

    this.service.addProperty(this.property).subscribe({
      next: (response) => {
        console.log("Property added successfully:", response);
      },
      error: (err) => {
        console.error("Error adding property:", err);
      },
    });
  }
}
