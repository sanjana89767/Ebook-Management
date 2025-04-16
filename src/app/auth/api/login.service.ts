import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private tokenKey = 'jwtToken';
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.loggedIn.asObservable();

  login(username: string, password: string) {
    const loginData = JSON.parse(localStorage.getItem('signup') || '{}');
    
    if (loginData.username === username && loginData.password === password) {
      const Token = btoa(JSON.stringify({ username, exp: Date.now() + 3600000 }));
      localStorage.setItem(this.tokenKey, Token);
      this.loggedIn.next(true);
      return of(true); 
    } else {
      return of(false); 
    }
  }

  hasToken(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return false;

    try {
      const decoded = JSON.parse(atob(token));
      return decoded.exp > Date.now();
    } catch {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

}
