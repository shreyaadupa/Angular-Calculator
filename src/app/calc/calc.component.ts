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

  ngOnInit() {
  }

  add(nums)
  {
    for(let i = 0; i<nums.length; i++)
    {
      this.answer+=nums[i];
      nums[i]=0;
    }
    return this.answer;
  }

  

}