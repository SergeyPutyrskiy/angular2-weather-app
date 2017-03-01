import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import { HomeService } from '../services/home.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
  selector: 'home-component',
  template: `
              <div *ngIf="loader == true" class="loader">
                <i class="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
              </div>
              <div *ngIf="failedRequest == true" class="failedRequest">
                <h1>Sorry, requested data hasn't arrived, please refresh page.</h1>
              </div>
              <div class="dateTime">
                <p class="time">{{ time }}</p>
                <p class="date">{{ today | date }}</p>
              </div>
              <div class="currentWeather mainContent" *ngFor=" let object of weather">
                <div class="city" *ngFor=" let listCities of object.list ">
                  <ul class="cityWeather">
                    <li class="itemCityTitle"><h2 class="cityTitle">Weather in {{ listCities.name }}</h2></li>
                    <li class="itemTemperature"><p class="temperature"> {{listCities.main.temp | number:'1.0-0'}} °C</p></li>
                    <li class="details">
                      <ul>
                        <li><p>Humidity</p> {{listCities.main.humidity}}</li>
                        <li><p>Pressure</p> {{listCities.main.pressure | number:'1.0-0'}}</li>
                        <li><p>Max</p> {{listCities.main.temp_max | number:'1.0-0'}}</li>
                        <li><p>Min</p> {{listCities.main.temp_min | number:'1.0-0'}}</li>
                        <li><p>Wind</p> {{listCities.wind.speed | number:'1.1-1'}}</li>
                      </ul>
                    </li>
                    <li class="liControl">
                      <button class="weatherOnFiveDays" 
                        [attr.data-city-id]='listCities.id' 
                        [routerLink]="['weather-details-component', 1]" 
                        (click)="getWeatherDetails($event)">Get weather on 5 days</button>
                    </li>
                  </ul>
                </div>
              </div>
            `,
  providers: [ HomeService ]
})

export class HomeComponent implements OnInit, OnDestroy {
  private weather: Array<any> = [];
  private time = new Date().toLocaleTimeString();
  private today: number = Date.now();
  private subscriptionTime: any;
  private subscriptionDataWeather: any;
  private loader: boolean = false;
  private failedRequest: boolean = false;

  constructor(private homeService: HomeService, private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {
    let time = Observable.interval().windowTime(1000);

    this.subscriptionTime = time.subscribe(
      () => {
        this.time = new Date().toLocaleTimeString();
      }
    );

    this.loader = true;

    this.subscriptionDataWeather = this.homeService.getWeather()
      .retry(5)
      .subscribe(
        weather => {
          this.weather.push(weather);
          this.loader = false;
        },
        error	=> {
          console.log(error);
          this.loader = false;
          this.failedRequest = true;
        }
      );
  }

  ngOnDestroy() {
    this.subscriptionTime.unsubscribe();
    this.subscriptionDataWeather.unsubscribe();
  }

  getWeatherDetails(e: any) {
    let dataCityId: number = e.target.getAttribute('data-city-id');
    this.router.navigate(['weather', dataCityId]);
  }
}
