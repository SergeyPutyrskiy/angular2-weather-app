import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { WeatherForecastComponent } from './components/weatherForecast.component';

/* Routing */
import { weatherForecastRouting } from './routing/weatherForecast.routing';

@NgModule({
  imports: [ CommonModule, weatherForecastRouting ],
  declarations: [ WeatherForecastComponent ],
  exports: [ WeatherForecastComponent ]
})

export class WeatherForecastModule {}

