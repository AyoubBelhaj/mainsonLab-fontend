import { Routes } from '@angular/router';
import { PropertyPageComponent } from './features/property/property-page/property-page.component';
import { TopOffersComponent } from './features/property/top-offers/top-offers.component';
import { PropertyDetailsComponent } from './features/property/property-details/property-details.component';
import { AboutUSComponent } from './core/components/about-us/about-us.component';
import { OwnerSpaceComponent } from './features/owner-space/owner-space.component';

export const routes: Routes = [
    {path:'',component:PropertyPageComponent},
    {path:'topOffers', component:TopOffersComponent},
    {path:'property/:id', component:PropertyDetailsComponent},
    {path:'about', component:AboutUSComponent},
    {path:'ownerSpace', component:OwnerSpaceComponent}
];
