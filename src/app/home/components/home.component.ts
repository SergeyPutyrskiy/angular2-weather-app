import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'home-component',
  template: `
              <div *ngIf="loader == true" class="loader">
                <i class="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
              </div>
              <div class="dateTime">
                <p class="time">{{ time }}</p>
                <p class="date">{{ today | date }}</p>
              </div>
              <div class="currentWeather mainContent" *ngFor=" let object of weather">
                <div class="city" *ngFor=" let listCities of object.list ">
                  <ul class="cityWeather">
                    <li class="itemCityTitle"><h2 class="cityTitle">Weather in {{ listCities.name }}</h2></li>
                    <li class="itemTemperature"><p class="temperature"> {{listCities.main.temp | number:'1.1-1'}} °C</p></li>
                    <li class="details">
                      <ul>
                        <li><p>Humidity</p> {{listCities.main.humidity}}</li>
                        <li><p>Pressure</p> {{listCities.main.pressure}}</li>
                        <li><p>Max</p> {{listCities.main.temp_max}}</li>
                        <li><p>Min</p> {{listCities.main.temp_min}}</li>
                        <li><p>Wind</p> {{listCities.wind.speed}}</li>
                      </ul>
                    </li>
                    <li><a class="weatherOnFiveDays" [routerLink]="['weather-details-component', 1]">Get weather on 5 days</a></li>
                  </ul>
                </div>
              </div>
              <router-outlet></router-outlet>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit, OnDestroy {
  private weather: Object[] = [];
  time = new Date().toLocaleTimeString();
  today: number = Date.now();
  subscriptionTime: any;
  subscriptionDataWeather: any;
  loader: boolean = false;

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    let time = Observable.interval().windowTime(1000);

    this.subscriptionTime = time.subscribe(
      () => {
        this.time = new Date().toLocaleTimeString();
      }
    );

    this.loader = true;

    this.subscriptionDataWeather = this._homeService.getWeather()
      .retry(5)
      .subscribe(
        weather => {
          this.weather = [];
          this.weather.push(weather);
          this.loader = false;
        },
        error	=> {
          console.log(error);
          this.loader = false;
        }
      );
  }

  ngOnDestroy() {
    this.subscriptionTime.unsubscribe();
    this.subscriptionDataWeather.unsubscribe();
  }
}
