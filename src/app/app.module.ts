/* Modules */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

/* Custom modules */
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { CapitalCitiesModule } from "./capitalCities/capitalCities.module";

/* Components */
import { AppComponent }  from './app.component';

/* Routing */
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, HomeModule, SharedModule, CapitalCitiesModule, routing ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
