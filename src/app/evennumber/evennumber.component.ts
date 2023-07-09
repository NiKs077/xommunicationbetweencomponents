import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evennumber',
  templateUrl: './evennumber.component.html',
  styleUrls: ['./evennumber.component.css']
})
export class EvennumberComponent {
  @Input("number") displayEvenNumber:number; 
}
