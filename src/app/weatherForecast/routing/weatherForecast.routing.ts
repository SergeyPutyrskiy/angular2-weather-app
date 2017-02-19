import {Routes, RouterModule, Route} from '@angular/router';

/* Import components for use in routing */
import { WeatherForecastComponent } from '../components/weatherForecast.component';

const routes : Routes = [
  { path: 'weather-forecast', component: WeatherForecastComponent }
];

export const weatherForecastRouting = RouterModule.forChild(routes);
