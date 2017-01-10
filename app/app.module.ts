import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Custom modules */
import { SharedModule } from "./shared/shared.module";

/* Custom components */
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';

@NgModule({
  imports:      [ BrowserModule, SharedModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
