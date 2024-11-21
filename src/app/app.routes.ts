import { Routes } from '@angular/router';
import { PropertyPageComponent } from './features/property/property-page/property-page.component';
import { TopOffersComponent } from './features/property/top-offers/top-offers.component';

export const routes: Routes = [
    {path:'',component:PropertyPageComponent},
    {path:'topOffers', component:TopOffersComponent}
];
