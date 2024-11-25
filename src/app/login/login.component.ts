import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.username && this.password) {
      this.authService.signIn(this.username, this.password).subscribe({
        next: (response) => {
          console.log('Connexion réussie :', response);
          // Sauvegardez le token ou les informations de l'utilisateur (si renvoyé par l'API)
          localStorage.setItem('user', JSON.stringify(response));
          // Redirigez vers la page "Search in Offers"
          this.router.navigate(['/search-offers']);
        },
        error: (error) => {
          console.error('Erreur lors de la connexion :', error);
          this.errorMessage = 'Invalid username or password.';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    }
  }
}
