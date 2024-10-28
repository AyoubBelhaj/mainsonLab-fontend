import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { PropertyListComponent } from "../property-list/property-list.component";

@Component({
  selector: 'app-property-page',
  standalone: true,
  imports: [SearchBarComponent, PropertyListComponent],
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.css'
})
export class PropertyPageComponent {
  searchKeyword: string = '';
  selectedFilters: any = {};

  onSearchEvent(keyword: string) {
    this.searchKeyword = keyword;
  }

  onFilterEvent(filters: any) {
    this.selectedFilters = filters;
  }
}
