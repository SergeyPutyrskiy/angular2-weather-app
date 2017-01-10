import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Modules */
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";

/* Components */
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HomeModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
