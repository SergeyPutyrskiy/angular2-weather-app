import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../shared/shared.module';

/* Components */
import { WeatherForecastComponent } from './components/weatherForecast.component';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ WeatherForecastComponent ],
  exports: [ WeatherForecastComponent ]
})

export class WeatherForecastModule {}

