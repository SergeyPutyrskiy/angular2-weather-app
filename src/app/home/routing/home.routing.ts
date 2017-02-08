import {Routes, RouterModule, Route} from '@angular/router';

/* Import components for use in routing */
import { HomeComponent } from '../components/home.component';
import { WeatherDetailsComponent } from '../components/weatherDetails.component';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather-details', component: WeatherDetailsComponent }
];

export const routing = RouterModule.forRoot(routes);
