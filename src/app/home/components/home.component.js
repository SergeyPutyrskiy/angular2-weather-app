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
var home_service_1 = require('../services/home.service');
var Rx_1 = require('rxjs/Rx');
var HomeComponent = (function () {
    function HomeComponent(_homeService) {
        this._homeService = _homeService;
        this.weather = [];
        this.time = new Date().toLocaleTimeString();
        this.today = Date.now();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var time = Rx_1.Observable.interval().windowTime(1000);
        this.subscriptionTime = time.subscribe(function () {
            _this.time = new Date().toLocaleTimeString();
        });
        this.subscriptionDataWeather = this._homeService.getWeather()
            .retry(5)
            .subscribe(function (weather) {
            _this.weather = [];
            _this.weather.push(weather);
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTime.unsubscribe();
        this.subscriptionDataWeather.unsubscribe();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            template: "\n              <h3 class=\"dateTime\">{{ today | date }}, {{ time }}</h3>\n              <div class=\"currentWeather mainContent\" *ngFor=\" let object of weather\">\n                <div class=\"city\" *ngFor=\" let listCities of object.list \">\n                  <h2 class=\"cityTitle\">Weather in {{ listCities.name }}</h2>\n                  <p class=\"temperature\"> {{listCities.main.temp | number:'1.1-1'}} \u00B0C</p>\n                  <ul class=\"details\">\n                    <li><p>Humidity</p> {{listCities.main.humidity}}</li>\n                    <li><p>Pressure</p> {{listCities.main.pressure}}</li>\n                    <li><p>Max</p> {{listCities.main.temp_max}}</li>\n                    <li><p>Min</p> {{listCities.main.temp_min}}</li>\n                    <li><p>Wind</p> {{listCities.wind.speed}}</li>\n                  </ul>\n                </div>\n              </div>\n              <router-outlet></router-outlet>\n            ",
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map