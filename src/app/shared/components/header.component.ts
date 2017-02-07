import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
              <header class="header">
                <div class="floatLeft">
                  <div class="logo"><img [src]="logoUrl" alt="logo"></div>
                </div>
                <div class="floatRight">
                  <navigation-component></navigation-component>
                </div>
              </header>
            `
})

export class HeaderComponent {
  logoUrl = '../../../assets/images/logo.ico';
}
