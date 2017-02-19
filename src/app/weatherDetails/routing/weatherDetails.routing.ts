import {Routes, RouterModule, Route} from '@angular/router';

/* Import components for use in routing */
import { WeatherDetailsComponent } from '../components/weatherDetails.component';

const routes : Routes = [
  { path: 'weather/:id', component: WeatherDetailsComponent }
];

export const weatherDetailsRouting = RouterModule.forChild(routes);
