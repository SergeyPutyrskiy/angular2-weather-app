import {Routes, RouterModule, Route} from '@angular/router';

/* Import components for use in routing */
import { HomeComponent } from './home/components/home.component';
import { CapitalCitiesComponent } from './capitalCities/components/capitalCities.component';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'capital-cities', component: CapitalCitiesComponent }
];

export const routing = RouterModule.forRoot(routes);
