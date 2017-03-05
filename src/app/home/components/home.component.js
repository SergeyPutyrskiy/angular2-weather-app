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
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(homeService, router, elementRef) {
        this.homeService = homeService;
        this.router = router;
        this.elementRef = elementRef;
        this.weather = [];
        this.time = new Date().toLocaleTimeString();
        this.today = Date.now();
        this.loader = false;
        this.failedRequest = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var time = Rx_1.Observable.interval().windowTime(1000);
        this.subscriptionTime = time.subscribe(function () {
            _this.time = new Date().toLocaleTimeString();
        });
        this.loader = true;
        this.subscriptionDataWeather = this.homeService.getWeather()
            .retry(5)
            .subscribe(function (weather) {
            _this.weather.push(weather);
            _this.loader = false;
        }, function (error) {
            console.log(error);
            _this.loader = false;
            _this.failedRequest = true;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTime.unsubscribe();
        this.subscriptionDataWeather.unsubscribe();
    };
    HomeComponent.prototype.getWeatherDetails = function (e) {
        var dataCityId = e.target.getAttribute('data-city-id');
        this.router.navigate(['weather', dataCityId]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            template: "\n              <div *ngIf=\"loader == true\" class=\"loader\">\n                <i class=\"fa fa-spinner fa-pulse fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <div *ngIf=\"failedRequest == true\" class=\"failedRequest\">\n                <h1>Sorry, requested data hasn't arrived, please refresh page.</h1>\n              </div>\n              <div class=\"dateTime\">\n                <p class=\"time\">{{time}}</p>\n                <p class=\"date\">{{today | date}}</p>\n              </div>\n              <div class=\"mainContent weatherContainer\" *ngFor=\" let object of weather\">\n                <div class=\"itemWeather\" *ngFor=\" let listCities of object.list \">\n                  <ul class=\"cityWeather outerBoxStyle\">\n                    <li class=\"itemCityTitle\"><h2 class=\"cityTitle\">Weather in {{ listCities.name }}</h2></li>\n                    <li class=\"itemTemperature\"><p class=\"temperature\"> {{listCities.main.temp | number:'1.0-0'}} \u00B0C</p></li>\n                    <li class=\"details innerBoxStyle\">\n                      <ul>\n                        <li><p>Humidity</p>{{listCities.main.humidity}}</li>\n                        <li><p>Pressure</p>{{listCities.main.pressure | number:'1.0-0'}}</li>\n                        <li><p>Max</p>{{listCities.main.temp_max | number:'1.0-0'}}</li>\n                        <li><p>Min</p>{{listCities.main.temp_min | number:'1.0-0'}}</li>\n                        <li><p>Wind</p>{{listCities.wind.speed | number:'1.1-1'}}</li>\n                      </ul>\n                    </li>\n                    <li class=\"liControl\">\n                      <button class=\"weatherOnFiveDays\" \n                        [attr.data-city-id]='listCities.id' \n                        [routerLink]=\"['weather-details-component', 1]\" \n                        (click)=\"getWeatherDetails($event)\">Get weather on 5 days</button>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            ",
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.Router, core_1.ElementRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map