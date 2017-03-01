import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class WeatherDetailsService {
  private url = 'http://api.openweathermap.org/data/2.5/forecast?id=';

  constructor(private http: Http) {}

  /**
   *
   * @param id
   * @returns {Observable<R>}
   * Make request to the server and get weather forecast for 5 days
   */
  getDetailsWeather(id: String): Observable<any> {
    return this.http.get(this.url+id+'&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19').map(res => res.json());
  }

  /**
   *
   * @param data
   * @returns {Array<any>[]}
   * Sort data by each day
   */
  getSortedWeatherByDays(data: Array<any>): Array<any> {
    let startIndex: number,
      currentDate: String, prevDate: String,
      sortedDataByDay: Array<any> = [],
      count: number = 0;

    let weatherByDays = data.map(function (itemList) {
      itemList.list.map(function (itemEachHourData: any) {
        startIndex = itemEachHourData.dt_txt.search(/\s/);
        currentDate = itemEachHourData.dt_txt.slice(0, startIndex);

        if(currentDate != prevDate && prevDate != 'undefined') {
          count++;
          sortedDataByDay[count] = [];
          sortedDataByDay[count].push(itemEachHourData);
        }
        else {
          sortedDataByDay[count].push(itemEachHourData);
        }

        prevDate = currentDate;
      });

      return sortedDataByDay;
    });

    return weatherByDays;
  }
}
