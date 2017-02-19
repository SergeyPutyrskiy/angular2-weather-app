import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="wrapper">
               <header class="header">
                <div class="floatLeft">
                  <div class="logo"><img [src]="logoUrl" alt="logo"></div>
                </div>
                <div class="floatRight">
                  <nav class="navigation">
                    <a routerLink="">Home</a>
                    <a routerLink="weather-forecast">Weather Forecast</a>
                  </nav>
                </div>
              </header>
              <router-outlet></router-outlet>
             </div>`
})
export class AppComponent  {
   logoUrl: string = '../../../assets/images/logo.ico';
}
