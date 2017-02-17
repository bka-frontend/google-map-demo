'use strict';
angular.module('map')
    .controller('homeController', function ($scope, mapService, resources, $modal) {

            mapService.renderMap();

            mapService.renderVan();

            mapService.renderScope();

            mapService.renderCity();

            mapService.renderPlanRoute();

            mapService.renderPassedRoute();
    });