import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  logindisable= false;


  loginAuthontication(uid:string,pwd:string)
  {
   this.router.navigate(['/home']);

   localStorage.setItem('userId', uid );

 }
}
