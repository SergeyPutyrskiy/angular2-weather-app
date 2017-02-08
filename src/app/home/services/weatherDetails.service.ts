import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class WeatherDetailsService {

  //private _url = 'https://jsonplaceholder.typicode.com/posts';
  //private _url = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=fccb137619df444c88e89f1b68ad6c19';
  //private _url = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&APPID=fccb137619df444c88e89f1b68ad6c19';
  private url = 'http://api.openweathermap.org/data/2.5/weather?id=706483&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19';

  constructor(private http: Http) {}

  getWeather(): Observable<any> {
    return Observable
    //.interval(60*30*1000)
      .interval(100*20)
      .flatMap(() => {
        return this.http.get(this.url).map(res => res.json());
      });

  }
}
