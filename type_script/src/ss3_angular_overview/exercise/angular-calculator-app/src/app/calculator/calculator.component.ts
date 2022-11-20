import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstOperand: number;
  seccondOperand: number;
  operator: string;
  result: (number | string);

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(operator) {

    switch (operator) {
      case "+" :
        this.result = "Result = " + (this.firstOperand + this.seccondOperand);
        return this.result;

      case "-" :
        this.result = "Result = " + (this.firstOperand - this.seccondOperand);
        return this.result;

      case "x" :
        this.result = "Result = " + (this.firstOperand * this.seccondOperand);
        return this.result;

      case "/" :
        if (this.seccondOperand == 0) {
          this.result = "Không thể chia cho 0";
          break;
        } else {
          this.result = "Result = " + (this.firstOperand / this.seccondOperand);
          break;
        }
        return this.result;
    }

  }

}
