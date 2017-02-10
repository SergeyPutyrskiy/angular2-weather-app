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
var Rx_1 = require("rxjs/Rx");
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.url = 'http://api.openweathermap.org/data/2.5/group?id=706483,703448,709717,709930,702550&units=metric&APPID=fccb137619df444c88e89f1b68ad6c19';
    }
    HomeService.prototype.getWeather = function () {
        var _this = this;
        return Rx_1.Observable
            .interval(400 * 10)
            .flatMap(function () {
            return _this.http.get(_this.url).map(function (res) { return res.json(); });
        });
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map