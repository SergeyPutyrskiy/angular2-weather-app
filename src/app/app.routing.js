"use strict";
var router_1 = require('@angular/router');
/* Import components for use in routing */
var home_component_1 = require('./home/components/home.component');
var capitalCities_component_1 = require('./capitalCities/components/capitalCities.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'capital-cities', component: capitalCities_component_1.CapitalCitiesComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.jts.map
