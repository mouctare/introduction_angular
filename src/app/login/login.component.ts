import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = 'Vous etes déconecté';
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
    ){}

  ngOnInit(){
  this.auth = this.authService;
      
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = 'Vous etes connecté'
    } else {
      this.message = 'Inditifiant ou mot de pass incorrect'
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
       this.setMessage();
        if(isLoggedIn){
         this.router.navigate(['/pokemons'])
      } else {
        this.password = '';
        this.router.navigate(['/login'])
      }
      
    })
  }

  logout(){
    this.auth.logout();
    this.message = "Vous ete deconnecté"
  }
}
