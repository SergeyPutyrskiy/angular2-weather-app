"use strict";
var router_1 = require('@angular/router');
/* Import components for use in routing */
var home_component_1 = require('../components/home.component');
var weatherDetails_component_1 = require('../components/weatherDetails.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'weather-details', component: weatherDetails_component_1.WeatherDetailsComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=home.routing.js.map