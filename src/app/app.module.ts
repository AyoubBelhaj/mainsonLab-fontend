import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Nécessaire pour les appels HTTP
import { AppComponent } from './app.component'; // Importer le composant principal
import { RegisterModule } from './register/register.module'; // Importer RegisterModule

@NgModule({
  declarations: [
    AppComponent, // Déclarer le composant principal
    // autres composants si nécessaires
  ],
  imports: [
    BrowserModule,     // Module requis pour les applications Angular
    HttpClientModule,  // Module requis pour effectuer des requêtes HTTP
    RegisterModule     // Module personnalisé pour l'enregistrement
  ],
  providers: [],       // Ajouter ici les services globaux si nécessaires
  bootstrap: [AppComponent] // Composant racine de l'application
})
export class AppModule { }
