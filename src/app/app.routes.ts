import { Routes } from '@angular/router';
import { PropertyPageComponent } from './features/property/property-page/property-page.component';
import { TopOffersComponent } from './features/property/top-offers/top-offers.component';
import { PropertyDetailsComponent } from './features/property/property-details/property-details.component';
import { AboutUSComponent } from './core/components/about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; // Import du LoginComponent

export const routes: Routes = [
    { path: '', component: PropertyPageComponent },
    { path: 'topOffers', component: TopOffersComponent },
    { path: 'property/:id', component: PropertyDetailsComponent },
    { path: 'about', component: AboutUSComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent } // Route pour la connexion
];
