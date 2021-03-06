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
/* Components */
var weatherDetails_component_1 = require('./components/weatherDetails.component');
/* Pipes */
var extractTime_pipe_1 = require('./pipes/extractTime.pipe');
/* Routing */
var weatherDetails_routing_1 = require('./routing/weatherDetails.routing');
var WeatherDetailsModule = (function () {
    function WeatherDetailsModule() {
    }
    WeatherDetailsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, weatherDetails_routing_1.weatherDetailsRouting],
            declarations: [weatherDetails_component_1.WeatherDetailsComponent, extractTime_pipe_1.ExtractTime],
            exports: [weatherDetails_component_1.WeatherDetailsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherDetailsModule);
    return WeatherDetailsModule;
}());
exports.WeatherDetailsModule = WeatherDetailsModule;
//# sourceMappingURL=weatherDetails.module.js.map