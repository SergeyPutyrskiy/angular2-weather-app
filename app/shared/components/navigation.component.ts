import { Component } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `
              <nav class="navigation">
                <a href="#">Home</a>
                <a href="#">Detail forecast</a>
                <a href="#">Forecast in capitals</a>
              </nav>
            `
})

export class NavigationComponent { }
