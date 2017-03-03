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
var weatherDetails_service_1 = require('../services/weatherDetails.service');
var router_1 = require('@angular/router');
var WeatherDetailsComponent = (function () {
    function WeatherDetailsComponent(weatherDetailsService, route) {
        this.weatherDetailsService = weatherDetailsService;
        this.route = route;
        this.weatherDetails = [];
        this.weatherDetailsByDays = [];
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.weatherDetailsService.getDetailsWeather(_this.id.toString())
                .retry(5)
                .subscribe(function (weatherDetails) {
                _this.weatherDetails.push(weatherDetails);
                _this.getSortedDateByDays();
            }, function (error) {
                console.log(error);
            });
        });
    };
    WeatherDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WeatherDetailsComponent.prototype.getSortedDateByDays = function () {
        this.weatherDetailsByDays = this.weatherDetailsService.getSortedWeatherByDays(this.weatherDetails);
        console.log("In component: ", this.weatherDetailsByDays);
    };
    WeatherDetailsComponent = __decorate([
        core_1.Component({
            selector: 'weather-details-component',
            template: "\n              <div class=\"mainContent weatherContainer weatherDetails\">\n\n                <div *ngFor=\"let object of weatherDetails\">\n                  <h2 class=\"cityTitle\">Weather in {{ object.city.name }} on 5 days</h2>\n                  \n                  <div class=\"weatherByDate\" *ngFor=\"let weatherByDay of weatherDetailsByDays; let first = first\">\n                    <table class=\"outerBoxStyle\">\n                      <thead>\n                        <tr>\n                          <th colspan=\"1\"></th>\n                          <th>Description</th>\n                          <th>Temperature</th>\n                          <th>Humidity</th>\n                          <th>Pressure</th>\n                          <th>Min / Max temperature</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr class=\"weatherByHours\" *ngFor=\"let weatherByHours of weatherByDay\">\n                          <td>{{weatherByHours.dt_txt | extractTime}}</td>\n                          <td>{{weatherByHours.weather[0].description}}</td>\n                          <td>{{weatherByHours.main.temp | number:'1.0-0'}} \u00B0C</td>\n                          <td>{{weatherByHours.main.humidity}}</td>\n                          <td>{{weatherByHours.main.pressure | number:'1.0-0'}}</td>\n                          <td>{{weatherByHours.main.temp_min | number:'1.0-0'}} / {{weatherByHours.main.temp_max | number:'1.0-0'}} \u00B0C</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                  \n                </div>\n              \n              </div>\n            ",
            providers: [weatherDetails_service_1.WeatherDetailsService]
        }), 
        __metadata('design:paramtypes', [weatherDetails_service_1.WeatherDetailsService, router_1.ActivatedRoute])
    ], WeatherDetailsComponent);
    return WeatherDetailsComponent;
}());
exports.WeatherDetailsComponent = WeatherDetailsComponent;
//# sourceMappingURL=weatherDetails.component.js.map