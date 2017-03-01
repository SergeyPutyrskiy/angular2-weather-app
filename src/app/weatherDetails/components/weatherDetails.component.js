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
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.weatherDetailsService.getDetailsWeather(_this.id.toString())
                .retry(5)
                .subscribe(function (weatherDetails) {
                _this.weatherDetails.push(weatherDetails);
                console.log(_this.weatherDetails);
                //console.log(this.weatherDetails[0].list);
                // console.log(this.weatherDetails[0].list[0].dt_txt);
                // var startIndex = this.weatherDetails[0].list[0].dt_txt.search(/\s/);
                // var cuttedDate = this.weatherDetails[0].list[0].dt_txt.slice(0, startIndex);
                // console.log(cuttedDate);
                //
                // for(var i = 0; i < this.weatherDetails.length; i++) {
                //   //console.log(this.weatherDetails[i].list);
                //   //console.log(this.weatherDetails[i].list.length);
                //
                //   console.log(this.weatherDetails[i]);
                //this.sortedWeatherData.push(this.weatherDetails[i].list);
                //this.eachDataByHour = this.weatherDetails[i].list;
                //}
                // for(var j = 0; j < this.eachDataByHour.length; i++) {
                //   console.log(this.eachDataByHour[j]);
                // }
            }, function (error) {
                console.log(error);
            });
        });
    };
    WeatherDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WeatherDetailsComponent = __decorate([
        core_1.Component({
            selector: 'weather-details-component',
            template: "\n              <div class=\"mainContent\">\n\n                <div *ngFor=\"let object of weatherDetails\">\n                  <h2>Weather in {{ object.city.name }} on 5 days</h2>\n                  \n                  <!--<div class=\"weatherByDate\" *ngFor=\"let \">-->\n                    <!---->\n                  <!--</div>-->\n                  \n                </div>\n              \n              </div>\n            ",
            providers: [weatherDetails_service_1.WeatherDetailsService]
        }), 
        __metadata('design:paramtypes', [weatherDetails_service_1.WeatherDetailsService, router_1.ActivatedRoute])
    ], WeatherDetailsComponent);
    return WeatherDetailsComponent;
}());
exports.WeatherDetailsComponent = WeatherDetailsComponent;
//# sourceMappingURL=weatherDetails.component.js.map