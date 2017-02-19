import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { WeatherDetailsComponent } from './components/weatherDetails.component';

/* Routing */
import { weatherDetailsRouting } from './routing/weatherDetails.routing';

@NgModule({
  imports:      [ CommonModule, weatherDetailsRouting ],
  declarations: [ WeatherDetailsComponent ],
  exports: [ WeatherDetailsComponent ]
})
export class WeatherDetailsModule {}
