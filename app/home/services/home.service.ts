import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  getWeather(): string[] {
    return ["Weather Forecast in Kharkiv", "Weather Forecast in Kiev"]
  }
}
