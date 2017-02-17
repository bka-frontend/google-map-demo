'use strict';

angular.module('map')
    .service('resources', function () {
        this.cities=[
            // north city
            {name: 'Auckland', coordinate: { lat: -36.865043, lng: 174.753856 }, img: './resources/img/wellington.png'},
            {name: 'Hamilton', coordinate: { lat: -37.788055, lng: 175.272416 }, img: './resources/img/blank.png'},
            {name: 'Tauranga', coordinate: { lat: -37.681903, lng: 176.166346 }, img: './resources/img/wellington.png'},
            {name: 'Rotorua', coordinate: { lat: -38.136563, lng: 176.244502 }, img: './resources/img/wellington.png'},
            {name: 'Taupo', coordinate: { lat: -38.684982, lng: 176.068013 }, img: './resources/img/wellington.png'},
            {name: 'Napier', coordinate: { lat: -39.492552, lng: 176.909920 }, img: './resources/img/wellington.png'},
            {name: 'PalmerstonNorth', coordinate: { lat: -40.352182, lng: 175.609085 }, img: './resources/img/wellington.png'},
            {name: 'Wellington', coordinate: { lat: -41.286460, lng: 174.776236 }, img: './resources/img/wellington.png'},
            // south city
            {name: 'Blenheim', coordinate: { lat: -41.513442, lng: 173.961250 }, img: './resources/img/auckland.jpg'},
            {name: 'AbelTasman', coordinate: { lat: -40.822381, lng: 173.001392 }, img: './resources/img/wellington.png'},
            {name: 'Christchurch', coordinate: { lat: -43.532054, lng: 172.636225 }, img: './resources/img/wellington.png'},
            {name: 'Dunedin', coordinate: { lat: -45.878760, lng: 170.502798 }, img: './resources/img/wellington.png'},
            {name: 'Queenstown', coordinate: { lat: -45.031162, lng: 168.662644 }, img: './resources/img/queenstown.jpg'},
        ];
    });