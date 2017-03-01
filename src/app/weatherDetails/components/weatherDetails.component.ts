import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent">

                <div *ngFor="let object of weatherDetails">
                  <h2>Weather in {{ object.city.name }} on 5 days</h2>
                  
                  <!--<div class="weatherByDate" *ngFor="let weatherByDay of weatherDetailsByDays">-->
                    <!--<p>{{ weatherByDay.clouds.all }}</p>-->
                  <!--</div>-->
                  
                  <p>{{ weatherDetailsByDays }}</p>
                  
                </div>
              
              </div>
            `,
  providers: [ WeatherDetailsService ]
})

export class WeatherDetailsComponent implements OnInit {
  private id: number;
  private subscription: any;
  private weatherDetails: Array<any> = [];
  private weatherDetailsByDays: Array<any> = [];

  constructor(private weatherDetailsService: WeatherDetailsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.weatherDetailsService.getDetailsWeather(this.id.toString())
        .retry(5)
        .subscribe(
          weatherDetails => {
            this.weatherDetails.push(weatherDetails);
            this.getSortedDateByDays();
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSortedDateByDays() {
    this.weatherDetailsByDays = this.weatherDetailsService.getSortedWeatherByDays(this.weatherDetails);
    console.log("In component: ", this.weatherDetailsByDays);
  }

}
