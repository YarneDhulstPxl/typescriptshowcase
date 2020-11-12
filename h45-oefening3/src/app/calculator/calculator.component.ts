import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: number;
  isHidden: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.result = this.firstNumber + this.secondNumber;
    this.isHidden = false;
  }

}
