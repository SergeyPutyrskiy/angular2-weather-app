/* Modules */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";

/* Components */
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, HomeModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
