import { Component, OnInit } from '@angular/core';
import { WeatherDetailsService } from '../services/weatherDetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-details-component',
  template: `
              <div class="mainContent weatherContainer weatherDetails">

                <div *ngFor="let object of weatherDetails">
                  <h2 class="cityTitle">Weather in {{ object.city.name }} on 5 days</h2>
                  
                  <div class="weatherByDate" *ngFor="let weatherByDay of weatherDetailsByDays; let first = first">
                    <table class="outerBoxStyle">
                      <thead>
                        <tr>
                          <th colspan="1"></th>
                          <th>Description</th>
                          <th>Temperature</th>
                          <th>Humidity</th>
                          <th>Pressure</th>
                          <th>Min / Max temperature</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="weatherByHours innerBoxStyle" *ngFor="let weatherByHours of weatherByDay">
                          <td>{{weatherByHours.dt_txt | extractTime}}</td>
                          <td>{{weatherByHours.weather[0].description}}</td>
                          <td>{{weatherByHours.main.temp | number:'1.0-0'}} °C</td>
                          <td>{{weatherByHours.main.humidity}}</td>
                          <td>{{weatherByHours.main.pressure | number:'1.0-0'}}</td>
                          <td>{{weatherByHours.main.temp_min | number:'1.0-0'}} / {{weatherByHours.main.temp_max | number:'1.0-0'}} °C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
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
