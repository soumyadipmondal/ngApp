import { Injectable } from '@angular/core';
import { AuthenticateService } from '../Auth/authenticate.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private route: Router, private authenticate : AuthenticateService) { }

  canActivate(){
    if(this.authenticate.isValidated()) return true;

    this.route.navigate(["/login"]);
  }

}
