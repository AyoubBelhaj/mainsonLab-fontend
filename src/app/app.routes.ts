import { Routes } from '@angular/router';
import { PropertyPageComponent } from './features/property/property-page/property-page.component';
import { TopOffersComponent } from './features/property/top-offers/top-offers.component';
import { PropertyDetailsComponent } from './features/property/property-details/property-details.component';
import { AboutUSComponent } from './core/components/about-us/about-us.component';
import { OwnerSpaceComponent } from './features/owner-space/owner-space.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

export const routes: Routes = [
    {path:'properties',component:PropertyPageComponent},
    {path:'register',component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'topOffers', component:TopOffersComponent},
    {path:'property/:id', component:PropertyDetailsComponent},
    {path:'about', component:AboutUSComponent},
    {path:'ownerSpace', component:OwnerSpaceComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
