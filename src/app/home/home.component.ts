import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isTrue = false;
  registerEnable = false;
  item: any;
  ProductName:any;
  userId: string;
    constructor() { }



    onclick()
    {
      this.registerEnable  = false;
      this.isTrue = true;


      console.log("homr" +this.userId);

    }



    onEnableRegister()
    {
      this.isTrue = false;
      this.registerEnable  = true;
    }
  ngOnInit() {
    this.userId =   localStorage.getItem('userId');

  }

}
