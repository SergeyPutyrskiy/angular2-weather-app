import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

import 'rxjs/observable/interval';

import { Observable } from "rxjs";

@Component({
  selector: 'home-component',
  template: `
              <header-component></header-component>
              <div class="current-weather" *ngFor=" let item of weather ">
                <h2 class="city-title">Weather in {{ item.name }}:</h2>
                <h4>{{ date }}</h4>
              </div>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit{
  private weather: Object[] = [];
  private date = new Date().toLocaleTimeString();

  constructor(private _homeService: HomeService) {
    setInterval(() => {return this.date;}, 1000);
  }

  ngOnInit() {
    this._homeService.getWeather()
      .subscribe(
        post => {
          this.weather.push(post);
        },
        error	=>	console.error(error)
      );
    console.log(this.weather);
  }


  //setInterval(() => { this.auth.refreshToken(); }, 1000 * 60 * 10);

}
