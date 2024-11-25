import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/users'; // L'URL de base pour vos API backend


  constructor(private http: HttpClient) {}

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
}
