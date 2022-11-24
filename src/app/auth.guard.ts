import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean {
    // Si l'utilisateur est connecté , je retourne true
    if(this.authService.isLoggedIn) {
      
      return true
    }
    //S'il n'est pas connecté je le redirige vers la page de login
    this.router.navigate(['/login']);
    return false;
  }
  
}
