import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="wrapper">
              <header-component></header-component>
              <router-outlet></router-outlet>
             </div>`
})
export class AppComponent  {}
