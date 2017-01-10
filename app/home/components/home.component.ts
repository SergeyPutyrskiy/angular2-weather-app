import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'home-component',
  template: `
              <header-component></header-component>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit{
  weather: string[];

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    this.weather = this._homeService.getWeather();
    console.log(this.weather = this._homeService.getWeather());
  }

}
