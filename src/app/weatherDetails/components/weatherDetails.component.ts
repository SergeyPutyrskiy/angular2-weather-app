import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent">
                Weather Details Component {{id}}
              </div>
            `,
  providers: [ WeatherDetailsService ]
})

export class WeatherDetailsComponent implements OnInit {
  id: number;
  subscription: any;

  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
}
