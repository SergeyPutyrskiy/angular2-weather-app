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
    this._homeService.getWeather()
      .subscribe(
        post => console.log(post),
        error	=>	console.error(error)
      );
  }

}
