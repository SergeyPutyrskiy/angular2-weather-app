"use strict";
var router_1 = require('@angular/router');
/* Import components for use in routing */
var weatherForecast_component_1 = require('../components/weatherForecast.component');
var routes = [
    { path: 'weather-forecast', component: weatherForecast_component_1.WeatherForecastComponent }
];
exports.weatherForecastRouting = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=weatherForecast.routing.js.map