import { Component, OnInit, ElementRef} from '@angular/core';
import 'rxjs/add/operator/map';

import {LoginModel} from '../../models/login/login.model';
import { AuthenticateService } from '../../Services/Auth/authenticate.service';

import { Router } from '@angular/router'
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError = false;
  isspecError = false;
  errTxt = '';
  email = "";
  pwd='';
  storeLogin: LoginModel[] = [];
  loginDB:any;
  editComment:any;
  updatedPost:any;
  hideEdit = false;

  isLoggedIn = false;
  data1:any;
  userDet = [];

  constructor(private _el: ElementRef, private authServ: AuthenticateService, public _route: Router) { }
  
  ngOnInit(): void {
    
  }

  formSubmit(data){
   let isSuccess = false;
   if(data.controls.email.value !=='' && data.controls.email.value !==undefined || data.controls.pwd.value !== '' && data.controls.pwd.value !==undefined){
    this.isGenError(false);
    let loginObj:LoginModel = {'email' : data.controls.email.value, 'password' : data.controls.pwd.value}
    console.log(this.authServ.validateCred(loginObj))
        /* .subscribe(user =>{
          console.log('subs')
          this.userDet.push(user)
        }); */
        console.log('out me');
        /* .toPromise()
        .then(data => {
          if(data){
            console.log(data);
            this.isLoggedIn = true;

            
          }
          else{
            this.reset();
            this.isGenError(true);
          }
        });   */  
   }else{
     this.reset();
     this.isGenError(true);
   }
  }

  reset = ()=>{
    this.email = '';
    this.pwd='';
  }

  isGenError= (isvalid)=>{
    if(isvalid){
      this.isError = isvalid;
      this.errTxt = "Invalid Email/ Password!"
      let elem = <HTMLElement>document.querySelector('#email');
      elem.focus();
    }
  }
}
