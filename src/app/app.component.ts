import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrOfOddNumbers:number[]=[];
  arrOfEvenNumbers:number[]=[];
  addedNumber(event:{count:number}){
    if(event.count%2==0){
      this.arrOfEvenNumbers.push(event.count);
    }else{
      this.arrOfOddNumbers.push(event.count);
    }
}
}
