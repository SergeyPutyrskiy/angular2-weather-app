import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
              <header class="header">
                <div class="float-left">
                  <div class="logo"><img [src]="logoUrl" alt="logo"></div>
                </div>
                <div class="float-right">
                  <navigation-component></navigation-component>
                </div>
              </header>
            `
})

export class HeaderComponent {
  logoUrl = '../../../images/logo.ico';
}
