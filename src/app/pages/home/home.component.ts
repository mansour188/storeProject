import { Component } from '@angular/core';
const ROWS_HEIGHT:{[id:number]:number}={1:400,3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  
})
export class HomeComponent {
  cols=3
  rows_height=ROWS_HEIGHT[this.cols]
  category:string|undefined

  onColumnsUpdated(colsNum:number) :void{
    this.cols=colsNum
    this.rows_height=ROWS_HEIGHT[this.cols]


  }
  onShowCategory(newCategory:string):void{
    this.category=newCategory

  }
}
