import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../shared/shared.module';

/* Components */
import { CapitalCitiesComponent } from './components/capitalCities.component';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ CapitalCitiesComponent ],
  exports: [ CapitalCitiesComponent ]
})

export class CapitalCitiesModule {}

