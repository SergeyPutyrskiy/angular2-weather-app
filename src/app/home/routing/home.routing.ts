import {Routes, RouterModule} from '@angular/router';

/* Import components for use in routing */
import { HomeComponent } from '../components/home.component';

const routes : Routes = [
  { path: '', component: HomeComponent }
];

export const homeRouting = RouterModule.forChild(routes);
