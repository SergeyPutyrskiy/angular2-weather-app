import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'home-component',
  template: `
              <div class="currentWeather" *ngFor=" let item of weather ">
                <h2 class="cityTitle">Weather in {{ item.name }}</h2>
                <h3 class="dateTime">{{ today | date }}, {{ time }}</h3>
                <p class="temperature"> {{item.main.temp}} °C</p>
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

    let time = Observable.interval(1111000).timeInterval().windowTime(0);

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
