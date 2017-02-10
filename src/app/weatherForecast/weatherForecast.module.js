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
var common_1 = require('@angular/common');
/* Modules */
var shared_module_1 = require('../shared/shared.module');
/* Components */
var weatherForecast_component_1 = require('./components/weatherForecast.component');
var WeatherForecastModule = (function () {
    function WeatherForecastModule() {
    }
    WeatherForecastModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [weatherForecast_component_1.WeatherForecastComponent],
            exports: [weatherForecast_component_1.WeatherForecastComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherForecastModule);
    return WeatherForecastModule;
}());
exports.WeatherForecastModule = WeatherForecastModule;
//# sourceMappingURL=weatherForecast.module.js.map