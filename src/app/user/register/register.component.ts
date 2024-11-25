import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isPasswordVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: UserService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log("registerform", this.registerForm);
      
      this.isLoading = true;
      const user: User = this.registerForm.value;

      this.authService.signUp(user).subscribe({
        next: (response) => {
          console.log('Inscription réussie :', response);
          alert('Registration successful!');
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'inscription :', error);
          alert(error?.error?.message || 'An error occurred. Please check your information.');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
