import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isPasswordVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const user: User = this.registerForm.value;

      this.authService.signUp(user).subscribe(
        (response) => {
          console.log('Inscription réussie :', response);
          alert('Inscription réussie.');
          this.registerForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'inscription :', error);
          alert(error.error.message || 'Une erreur est survenue. Vérifiez vos informations.');
        },
        () => {
          this.isLoading = false;
        }
      );
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}