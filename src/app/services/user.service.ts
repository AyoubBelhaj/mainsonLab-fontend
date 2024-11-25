import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn : boolean = false ; 

  private baseUrl = 'http://localhost:8081/api/users'; // L'URL de base pour vos API backend


  constructor(private http: HttpClient) { 
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.isLoggedIn = true ; 
    }else {
      this.isLoggedIn = false ;
    }
  }

  // Méthode pour l'inscription (sign up)
  signUp(user: User): Observable<User> {
    const url = `${this.baseUrl}/signup`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(url, user, { headers });
  }

  // Méthode pour la connexion (sign in)
  signIn(username: string, password: string): Observable<User> {
    const url = `${this.baseUrl}/signin`;
    const params = { username, password };
    return this.http.post<User>(url, {}, { params });
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.isLoggedIn = true ;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn = false ;
  }
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
