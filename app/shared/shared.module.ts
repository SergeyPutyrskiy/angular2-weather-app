import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header.component';
import { NavigationComponent } from './components/navigation.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ HeaderComponent, NavigationComponent ],
  exports: [ HeaderComponent, NavigationComponent ]
})
export class SharedModule { }
