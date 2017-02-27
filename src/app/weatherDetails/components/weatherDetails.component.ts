import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent">

                <div *ngFor="let object of weatherDetails">
                  <h2>Weather in {{ object.city.name }} on 5 days</h2>
                  
                  <!--<div class="weatherByDate" *ngFor="let ">-->
                    <!---->
                  <!--</div>-->
                  
                </div>
              
              </div>
            `,
  providers: [ WeatherDetailsService ]
})

export class WeatherDetailsComponent implements OnInit {
  id: number;
  subscription: any;
  private weatherDetails: Object[] = [];
  private weatherByDate: Object[] = [];

  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.weatherDetailsService.getDetailsWeather(this.id.toString())
        .retry(5)
        .subscribe(
          weatherDetails => {
            this.weatherDetails.push(weatherDetails);
            console.log(this.weatherDetails);
            //console.log(this.weatherDetails[0].city.name);
          },
          error => {
            console.log(error);
          }
        );
    });

    //this.subscription =
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
