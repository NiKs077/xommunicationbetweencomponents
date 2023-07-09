import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddnumberComponent } from './oddnumber/oddnumber.component';
import { EvennumberComponent } from './evennumber/evennumber.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddnumberComponent,
    EvennumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
