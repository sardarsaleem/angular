import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name = "Sardar";
  constructor( private loginService: LoginService) {

  }

  ngOnInit() {
  }

  loginUser(event)
  {
   event.preventDefault();
   const target=event.target;
   const uname=target.querySelector("#uid").value
   const pwd=target.querySelector("#pwd").value
   this.loginService.loginAuthontication(uname,pwd);




  }


}
