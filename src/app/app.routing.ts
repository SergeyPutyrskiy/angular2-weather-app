import {Routes, RouterModule } from '@angular/router';

/* Import components for use in routing */
import { HomeComponent } from './home/components/home.component';
import { AppComponent } from './app.component';

const routes : Routes = [
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
