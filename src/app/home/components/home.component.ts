import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'home-component',
  template: `
              <header-component></header-component>
              <div class="current-weather" *ngFor=" let item of weather ">
                <h2 class="city-title">Weather in {{ item.name }}:</h2>
                <h3>{{ today | date }}, {{ time }}</h3>
                <h4> {{item.main.temp}} °C</h4>
              </div>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit{
  private weather: Object[] = [];
  private time = new Date().toLocaleTimeString();
  today: number = Date.now();

  constructor(private _homeService: HomeService) {}

  ngOnInit() {

    let time = Observable.interval(1000).timeInterval().windowTime(0);

    time.subscribe(
      () => {
        this.time = new Date().toLocaleTimeString();
      }
    );

    this._homeService.getWeather()
      .subscribe(
        weather => {
          this.weather = [];
          this.weather.push(weather);
        },
        error	=> console.log(error)
      );
    console.log(this.weather);
  }

}
