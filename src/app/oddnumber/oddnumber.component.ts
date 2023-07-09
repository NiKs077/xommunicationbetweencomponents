import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-oddnumber',
  templateUrl: './oddnumber.component.html',
  styleUrls: ['./oddnumber.component.css']
})
export class OddnumberComponent {
  @Input("number") displayOddNumber:number;
}
