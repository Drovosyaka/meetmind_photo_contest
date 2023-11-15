import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  baseMediaURL = 'http://127.0.0.1:8000'
  private token: string | null;

  constructor(private router: Router, private http: HttpClient, private cookieservice: CookieService) {
    this.token = this.getToken()
  }

  login(username: string, password: string): Observable<any> {
    const login_headers_data = { username, password };
    return this.http.post(`${this.baseUrl}/user/login/`, login_headers_data);
  }

  getProfileData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/data/`);
  }

  getUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/data/`);
  }

  
  putProfileData(updatedData: any): Observable<any> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken() || ''}`
    });

    const options = { headers: headers }; 

    console.log(updatedData);
    return this.http.put(`${this.baseUrl}/profile/update/`, updatedData, options).pipe(
        tap((response: any) => {
            if (response.newToken) {
                this.saveToken(response.newToken);
            }
        })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('AuthContest', token);
  }

  saveUser(user: any) {
    this.getProfileData = user
    localStorage.setItem('data-user', user)
  }

  getToken(): string | null {
    return localStorage.getItem('AuthContest');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }



  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}