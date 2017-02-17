'use strict';

angular.module('map')
    .service('mapService', function (resources, $aside) {
        var _map;

        var _auckland = _.find(resources.cities,function(city){
            return city.name=='Auckland';
        });

        var _hamilton = _.find(resources.cities,function(city){
            return city.name=='Hamilton';
        });
       

        this.renderMap=function(){
            var mapCanvas = document.getElementById("map");
            var mapOptions = {
                center: new google.maps.LatLng(_auckland.coordinate.lat, _auckland.coordinate.lng),
                zoom: 13,
            }
            _map = new google.maps.Map(mapCanvas, mapOptions);
        }

        this.renderVan = function () {
            var marker = new google.maps.Marker({
                icon: "./resources/img/van.png",
                position: _hamilton.coordinate,
                map: _map,
            });
            marker.addListener('click', function(){
                var myModal = $aside({title: 'Title', content: 'Hello Hamilton!', show: true});
            });
        }

        this.renderScope = function(){
            var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#FF0000',
                fillOpacity: 0.15,
                map: _map,
                center: _hamilton.coordinate,
                radius: 10000
            });
        }

        this.renderCity=function(){
            _.each(resources.cities, function(city){
                var marker = new google.maps.Marker({
                    icon: city.img,
                    position: city.coordinate,
                    map: _map,
                });
                marker.addListener('click', function(){
                    var myModal = $aside({title: 'Title', content: 'Hello ' + city.name + '!', show: true});
                });
            });
        }

        this.renderPassedRoute = function(){
            var directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                map: _map,
                polylineOptions: {
                    strokeColor: '#999',
                    strokeWeight: "4",
                    strokeOpacity: "1"
                },
            });

            var directionsService = new google.maps.DirectionsService;
            directionsService.route({
                origin: new google.maps.LatLng(_auckland.coordinate.lat, _auckland.coordinate.lng),
                destination: new google.maps.LatLng(_hamilton.coordinate.lat, _hamilton.coordinate.lng),
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK)
                {
                    directionsDisplay.setDirections(result);
                } else
                {
                    alert("couldn't get directions:" + status);
                }
            });
        }

        this.renderPlanRoute = function () {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                map: _map,
                polylineOptions: {
                    strokeColor: '#d996c4',
                    strokeWeight: "4",
                    strokeOpacity: "1"
                },
            });

            var _cities=_.reject(resources.cities,function(city){ return city.name=='Auckland'; });
            var waypts = _.map(_cities, function(city){
                return {
                    location: city.coordinate,
                    stopover: false
                };
            });

            directionsService.route({
                origin: new google.maps.LatLng(_cities[0].coordinate.lat, _cities[0].coordinate.lng),
                destination: new google.maps.LatLng(_cities[_cities.length - 1].coordinate.lat, _cities[_cities.length - 1].coordinate.lng),
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK)
                {
                    directionsDisplay.setDirections(result);
                } else
                {
                    alert("couldn't get directions:" + status);
                }
            });
        }
    });