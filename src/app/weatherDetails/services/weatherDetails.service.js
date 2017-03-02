"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var WeatherDetailsService = (function () {
    function WeatherDetailsService(http) {
        this.http = http;
        this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=';
    }
    /**
     *
     * @param id
     * @returns {Observable<R>}
     * Make request to the server and get weather forecast for 5 days
     */
    WeatherDetailsService.prototype.getDetailsWeather = function (id) {
        return this.http.get(this.url + id + '&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19').map(function (res) { return res.json(); });
    };
    /**
     *
     * @param data
     * @returns {Array<any>[]}
     * Sort data by each day
     */
    WeatherDetailsService.prototype.getSortedWeatherByDays = function (data) {
        var startIndex, currentDate, prevDate, sortedDataByDay = [], count = 0;
        data.map(function (itemList) {
            itemList.list.map(function (itemEachHourData) {
                startIndex = itemEachHourData.dt_txt.search(/\s/);
                currentDate = itemEachHourData.dt_txt.slice(0, startIndex);
                if (currentDate != prevDate && prevDate != 'undefined') {
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
        return sortedDataByDay;
    };
    WeatherDetailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherDetailsService);
    return WeatherDetailsService;
}());
exports.WeatherDetailsService = WeatherDetailsService;
//# sourceMappingURL=weatherDetails.service.js.map