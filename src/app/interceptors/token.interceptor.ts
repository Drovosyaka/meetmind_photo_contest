import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from "../services/auth.service";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private apiService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.apiService.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(cloned).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            localStorage.clear
            this.router.navigate(['/login']);
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
