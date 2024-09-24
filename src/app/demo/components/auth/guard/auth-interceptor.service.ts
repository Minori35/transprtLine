import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,   
 throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptando petición:', req.url); // Para depuración

    const token = localStorage.getItem('accessToken');
    console.log('Token obtenido:', token);

    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 403 || error.status === 309) {
            console.error('Error de autenticación:', error);
            this.router.navigate(['/auth/login']);
          }
          return throwError(error);
        })
      );
    } else {
      console.warn('No se encontró token en localStorage');
      return next.handle(req);
    }
  }
}