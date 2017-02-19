import { Component } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `
              <nav class="navigation">
                <a routerLink="">Home</a>
                <a href="#">Detail forecast</a>
                <a routerLink="capital-cities">Forecast in capitals</a>
              </nav>
            `
})

export class NavigationComponent {}
