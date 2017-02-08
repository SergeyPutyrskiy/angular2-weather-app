import { Component } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent">
                Weather Details Component
              </div>
            `,
  providers: [ WeatherDetailsService ]
})

export class WeatherDetailsComponent {
  constructor(private _weatherDetailsService: WeatherDetailsService) {}
}
