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
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    WeatherDetailsComponent = __decorate([
        core_1.Component({
            selector: 'weather-details-component',
            template: "\n              <div class=\"mainContent\">\n                Weather Details Component {{id}}\n              </div>\n            ",
            providers: [weatherDetails_service_1.WeatherDetailsService]
        }), 
        __metadata('design:paramtypes', [weatherDetails_service_1.WeatherDetailsService, router_1.ActivatedRoute])
    ], WeatherDetailsComponent);
    return WeatherDetailsComponent;
}());
exports.WeatherDetailsComponent = WeatherDetailsComponent;
//# sourceMappingURL=weatherDetails.component.js.map