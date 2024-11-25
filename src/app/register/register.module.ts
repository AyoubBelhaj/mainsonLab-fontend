import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires
import { RegisterComponent } from './register.component'; // Composant d'enregistrement

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule // Nécessaire pour les formulaires réactifs
  ],
  exports: [RegisterComponent] // Exporter le composant pour qu'il soit utilisable ailleurs
})
export class RegisterModule { }
