import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RacesComponent } from './races.component';
@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,RacesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
