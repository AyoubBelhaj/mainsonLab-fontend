import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: UserService, private router: Router) {}

  onLogin(): void {
    if (this.username && this.password) {
      this.authService.signIn(this.username, this.password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Save the token or user information (if provided by the API)
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/topOffers']);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Invalid username or password.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }

  loginWithGoogle(): void {
    console.log('Google login initiated');
    // Implement Google login logic here
  }

  loginWithFacebook(): void {
    console.log('Facebook login initiated');
    // Implement Facebook login logic here
  }
}
