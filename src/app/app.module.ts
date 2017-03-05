/* Modules */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

/* Custom modules */
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { WeatherForecastModule } from "./weatherForecast/weatherForecast.module";
import { WeatherDetailsModule } from "./weatherDetails/weatherDetails.module";

/* Components */
import { AppComponent }  from './app.component';

/* Routing */
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, HomeModule, SharedModule, WeatherForecastModule, WeatherDetailsModule, routing ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
