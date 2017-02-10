import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HomeService {
  private url = 'http://api.openweathermap.org/data/2.5/group?id=706483,703448,709717,709930,702550&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19';

  constructor(private http: Http) {}

  getWeather(): Observable<any> {
    return Observable
      //.interval(60*30*1000)
      .interval(400*10)
      .flatMap(() => {
        return this.http.get(this.url).map(res => res.json());
      });

  }
}
