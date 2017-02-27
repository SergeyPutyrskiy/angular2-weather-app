import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class WeatherDetailsService {

  private url = 'http://api.openweathermap.org/data/2.5/forecast?id=';

  constructor(private http: Http) {}

  getDetailsWeather(id: String): Observable<any> {
    return this.http.get(this.url+id+'&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19').map(res => res.json());
  }
}
