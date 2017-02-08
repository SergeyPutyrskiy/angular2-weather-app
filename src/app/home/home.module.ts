import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from "../shared/shared.module";

/* Components */
import { HomeComponent } from './components/home.component';
import { WeatherDetailsComponent } from './components/weatherDetails.component';

/* Routing */
import { routing } from './routing/home.routing';

@NgModule({
  imports:      [ CommonModule, SharedModule, routing ],
  declarations: [ HomeComponent, WeatherDetailsComponent ],
  exports: [ HomeComponent,WeatherDetailsComponent ]
})
export class HomeModule {}
