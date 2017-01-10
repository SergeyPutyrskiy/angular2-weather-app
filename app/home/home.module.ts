import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from "../shared/shared.module";

/* Components */
import { HomeComponent } from './components/home.component';

/* Services */
import { HomeService } from './services/home.service';

@NgModule({
  imports:      [ CommonModule, SharedModule ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule {}
