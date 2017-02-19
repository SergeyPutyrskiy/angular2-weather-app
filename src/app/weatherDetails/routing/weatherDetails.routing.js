"use strict";
var router_1 = require('@angular/router');
/* Import components for use in routing */
var weatherDetails_component_1 = require('../components/weatherDetails.component');
var routes = [
    { path: 'weather/:id', component: weatherDetails_component_1.WeatherDetailsComponent }
];
exports.weatherDetailsRouting = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=weatherDetails.routing.js.map