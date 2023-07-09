import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {
  count=0;
  @Output("gameStarted") gameStarted=new EventEmitter<{count:number}>();
  ref=null;
  startGameAndIncrementCounting(){
   this.ref=setInterval(()=>this.gameStarted.emit({count:this.count+=1}),1000);
  }
  stopTheGameAndStopCounting(){
    clearInterval(this.ref);
  }
}
