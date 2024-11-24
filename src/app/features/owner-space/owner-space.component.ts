import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-space',
  standalone: true,
  imports: [],
  templateUrl: './owner-space.component.html',
  styleUrl: './owner-space.component.css'
})
export class OwnerSpaceComponent {
  
  submitOwnerSpace(event: Event): void {
    event.preventDefault(); 
    console.log('All data submitted successfully');
  }
  
}
