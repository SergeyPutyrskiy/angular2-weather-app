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
        var time = Rx_1.Observable.interval(1000).timeInterval().windowTime(0);
        time.subscribe(function () {
            _this.time = new Date().toLocaleTimeString();
        });
        this._homeService.getWeather()
            .subscribe(function (weather) {
            _this.weather = [];
            _this.weather.push(weather);
        }, function (error) { return console.log(error); });
        console.log(this.weather);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            template: "\n              <header-component></header-component>\n              <div class=\"current-weather\" *ngFor=\" let item of weather \">\n                <h2 class=\"city-title\">Weather in {{ item.name }}:</h2>\n                <h3>{{ today | date }}, {{ time }}</h3>\n                <h4> {{item.main.temp}} \u00B0C</h4>\n              </div>\n            ",
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map