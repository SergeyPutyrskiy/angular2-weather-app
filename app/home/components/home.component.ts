import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

import 'rxjs/observable/interval';

import { Observable } from "rxjs";

@Component({
  selector: 'home-component',
  template: `
              <header-component></header-component>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit{
  private weather: Object[] = [];


  constructor(private _homeService: HomeService) {}

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

}
