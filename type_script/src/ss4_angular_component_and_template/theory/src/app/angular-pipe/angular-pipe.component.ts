import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataInput : string = "Tết Đến rồi mọi Người Ơi";
  inputNumber :number = 0.01;
  inputCurrency : number = 9;

  today : Date = new Date();


}
