import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'home-component',
  template: `
              <h3 class="dateTime">{{ today | date }}, {{ time }}</h3>
              <div class="currentWeather mainContent" *ngFor=" let object of weather">
                <div class="city" *ngFor=" let listCities of object.list ">
                  <h2 class="cityTitle">Weather in {{ listCities.name }}</h2>
                  <p class="temperature"> {{listCities.main.temp | number:'1.1-1'}} °C</p>
                  <ul class="details">
                    <li><p>Humidity</p> {{listCities.main.humidity}}</li>
                    <li><p>Pressure</p> {{listCities.main.pressure}}</li>
                    <li><p>Max</p> {{listCities.main.temp_max}}</li>
                    <li><p>Min</p> {{listCities.main.temp_min}}</li>
                    <li><p>Wind</p> {{listCities.wind.speed}}</li>
                  </ul>
                </div>
              </div>
              <router-outlet></router-outlet>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit, OnDestroy{
  private weather: Object[] = [];
  private time = new Date().toLocaleTimeString();
  today: number = Date.now();
  subscriptionTime: any;
  subscriptionDataWeather: any;

  constructor(private _homeService: HomeService) {}

  ngOnInit() {

    let time = Observable.interval().windowTime(1000);

    this.subscriptionTime = time.subscribe(
      () => {
        this.time = new Date().toLocaleTimeString();
      }
    );

    this.subscriptionDataWeather = this._homeService.getWeather()
      .retry(5)
      .subscribe(
        weather => {
          this.weather = [];
          this.weather.push(weather);
        },
        error	=> console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscriptionTime.unsubscribe();
    this.subscriptionDataWeather.unsubscribe();
  }

}
