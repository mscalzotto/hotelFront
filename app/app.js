'use strict'

angular.module('hotel', ['ui.router', 'hotelConfig'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state({
    name: 'home',
    url: '/',
    templateUrl: './app/views/home.html',
    controller: 'HomeController'
  })
  .state({
    name: 'hoteles',
    url: '/hoteles',
    templateUrl: './app/views/hotel-list.html',
    controller: 'HotelController',
  })
  .state({
    name: 'no-hotels-found',
    url: '/no-hotels-found',
    templateUrl: './app/views/no-hotels.html',
  })
  .state({
    name: 'not-found',
    url: '/not-found',
    templateUrl: './app/views/404.html',
  });

  $urlRouterProvider.otherwise('/not-found');

});
