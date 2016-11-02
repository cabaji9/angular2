import { Component } from '@angular/core';
import { Race } from './race';
import { RACES } from './mock';

@Component({
  selector: 'racing-detail-app',
  templateUrl:'app/races.component.ts.html',
  styleUrls:['app/races.component.ts.css']
})
export class RacesComponent {
  cash = 10000;
  races:Race[];
  ngOnInit(){

   this.races=RACES;
 }

 called(){
   alert("called");
 }

}
