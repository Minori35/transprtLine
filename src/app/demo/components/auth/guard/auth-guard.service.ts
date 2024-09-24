import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 {
    // Lógica de autenticación
    const isAuthenticated =     localStorage.getItem('accessToken')
    console.log("🚀 ~ AuthGuard ~ isAuthenticated:", isAuthenticated)


    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth/login']); 
      return false;
    }
  }
}