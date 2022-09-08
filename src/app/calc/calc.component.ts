import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }
  //every time a number is pressed add it to the array in the order it is pressed
  //when calling the methods take the array param and execute the operation between each number present

  public nums = [];
  public answer;
  public input;


  ngOnInit() {
  }

  pressNum(num: string) {

    //Do Not Allow . more than once

    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.

  }


  getLastOperand() {

  }


  pressOperator(op: string) {

    //Do not allow operators more than once

    }


  


  clear() {
 
  }

  allClear() {

  }

  calcAnswer() {

  }

  getAnswer() {

  }


  

}