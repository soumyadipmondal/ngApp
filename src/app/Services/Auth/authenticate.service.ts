import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { from, of, pipe} from 'rxjs';
import {Subject} from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  jwt = [];
  subject = new Subject();
  isLoggedin = false;

  constructor(private _http : HttpClient) { }
 
  validateCred = (credential)=>{
    /* let info1 = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
    let nums = of(1, 2, 3, 4, 5);
    console.log(nums);
    let squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    let squareOdd = squareOddVals(nums);
    console.log(squareOdd); */
            this._http.get("http://localhost:3000/creds")
                .subscribe(data => {
                  if(data instanceof Array){
                    this.jwt = data.filter((user) =>{
                      return (user.email === credential.email && user.password === credential.password)
                    });
                    this.subject.next(this.jwt);
                  }
                });
                return this.subject.asObservable();
              //console.log(user);
              //return (user.email === credential.email && user.password === credential.password)
            
        /*  .toPromise()
         .then(data => {
          if(data instanceof Array){
            data.filter((user) =>{
              return (user.email === credential.email && user.password === credential.password)
            });
          }
         }) */
                
      /* .map(data =>{
        console.log(data);
      Object.values(data).map(item =>{
        if(item.email === credential.email && item.password === credential.password ){
          somevar.push(item.name)
        }else{
          somevar.push(false)
        }
      });
      if(somevar){
        this.isLoggedin = true;
        return somevar;
      }else{
        return false;
      }
    }); */
  } 

  isValidated = function(){

    return this.isLoggedin;
  }
}
