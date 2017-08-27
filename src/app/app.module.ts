import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedService} from './shared.service';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
