import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userInput: string = '';
  answer: string = '';


  pressNum(num: string) {

    //only allow decimal point once
    if (num == ".") {
      if (this.userInput != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }

    //Do Not Allow 0 at beginning of user input
    if (num == "0") {
      if (this.userInput == "") {
        return;
      }
      const previous = this.userInput[this.userInput.length - 1];
      if (previous === '÷' || previous === '*' || previous === '-' || previous === '+') {
        return;
      }
    }

    this.userInput = this.userInput + num
    this.calcAnswer();
  }


  getLastOperand() //gets the position or index number of the operation symbol
  //checks if the there is a new operation being done to replace the operation being done and continue evaluating the expression
  {
    let pos: number;
    console.log(this.userInput)
    pos = this.userInput.toString().lastIndexOf("+")
    if (this.userInput.toString().lastIndexOf("-") > pos) pos = this.userInput.lastIndexOf("-")
    if (this.userInput.toString().lastIndexOf("*") > pos) pos = this.userInput.lastIndexOf("*")
    if (this.userInput.toString().lastIndexOf("/") > pos) pos = this.userInput.lastIndexOf("/")
    console.log('Last ' + this.userInput.substr(pos + 1))
    return this.userInput.substr(pos + 1)
  }


  pressOperator(op: string) {

    //Do not allow operators more than once
    const lastKey = this.userInput[this.userInput.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.userInput = this.userInput + op
    this.calcAnswer();
  }

  allClear() //clears calculator of all operations and numbers
  {
    this.answer = '';
    this.userInput = '';
  }

  calcAnswer() //gets the last key entered and checked if its a decimal point or operation symbol and if so will ignore it to get only the number
  {
    let formula = this.userInput;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    //console.log("Formula " + formula);
    this.answer = eval(formula); //eval function executes an expression
  }

  getAnswer() //calls calcAnswer method to get result and display it 
  {
    this.calcAnswer();
    this.userInput = this.userInput;
    if (this.userInput == "0") this.userInput = "";
  }


  

}