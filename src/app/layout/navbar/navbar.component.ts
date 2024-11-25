import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = '';
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initial check
    this.isLoggedIn = !!localStorage.getItem('user');

    // Periodic check for changes in localStorage
    this.intervalId = setInterval(() => {
      this.isLoggedIn = !!localStorage.getItem('user');
    }, 500); // Check every 500ms
  }

  logout(): void {
    // Clear user data and redirect to login
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    // Clear interval to prevent memory leaks
    clearInterval(this.intervalId);
  }
}
