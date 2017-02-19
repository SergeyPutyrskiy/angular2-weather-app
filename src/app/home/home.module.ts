import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HomeComponent } from './components/home.component';

/* Routing */
//import { homeRouting } from './routing/home.routing';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})

export class HomeModule {}
