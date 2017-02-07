import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';


@Component({
  selector: 'home-component',
  template: `
              <header-component></header-component>
              <div class="current-weather" *ngFor=" let item of weather ">
                <h2 class="city-title">Weather in {{ item.name }}:</h2>
                <h3>{{ today | date:'medium' }} </h3>
                <h4> {{item.main.temp}} °C</h4>
              </div>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit{
  private weather: Object[] = [];
  private date = new Date().toLocaleTimeString();
  today: number = Date.now();

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
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
