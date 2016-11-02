import { Component } from '@angular/core';
import { RacesComponent } from './races.component';


@Component({
  selector: 'racing-app',
  template: `<h1>{{heading}}</h1> {{variable}}
  <racing-detail-app></racing-detail-app>
  `
})
export class AppComponent { heading='Primero';
variable='Caca';
}
