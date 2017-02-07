import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from "../shared/shared.module";

/* Components */
import { HomeComponent } from './components/home.component';

@NgModule({
  imports:      [ CommonModule, SharedModule ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule {}
