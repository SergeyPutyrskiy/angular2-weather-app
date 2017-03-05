import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { WeatherDetailsComponent } from './components/weatherDetails.component';

/* Pipes */
import { ExtractTime } from './pipes/extractTime.pipe';

/* Routing */
import { weatherDetailsRouting } from './routing/weatherDetails.routing';

@NgModule({
  imports:      [ CommonModule, weatherDetailsRouting ],
  declarations: [ WeatherDetailsComponent, ExtractTime ],
  exports: [ WeatherDetailsComponent ]
})
export class WeatherDetailsModule {}
