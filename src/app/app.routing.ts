import {Routes, RouterModule } from '@angular/router';

/* Import components for use in routing */
import { AppComponent } from './app.component';

const routes : Routes = [
  { path: '', component: AppComponent }
];

export const routing = RouterModule.forRoot(routes);
