import {Routes, RouterModule } from '@angular/router';

/* Import components for use in routing */
import { WeatherDetailsComponent } from './home/components/weatherDetails.component';
import { WeatherForecastComponent } from './weatherForecast/components/weatherForecast.component';

const routes : Routes = [
  { path: 'weather/:id', component: WeatherDetailsComponent },
  { path: 'weather-forecast', component: WeatherForecastComponent }
];

export const routing = RouterModule.forRoot(routes);
