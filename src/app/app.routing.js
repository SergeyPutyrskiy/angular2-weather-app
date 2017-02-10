"use strict";
var router_1 = require('@angular/router');
/* Import components for use in routing */
var home_component_1 = require('./home/components/home.component');
var weatherDetails_component_1 = require('./home/components/weatherDetails.component');
var weatherForecast_component_1 = require('./weatherForecast/components/weatherForecast.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'weather/:id', component: weatherDetails_component_1.WeatherDetailsComponent },
    { path: 'weather-forecast', component: weatherForecast_component_1.WeatherForecastComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map