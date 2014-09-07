'use strict';

/**
 * @ngdoc overview
 * @name myYeomanAppApp
 * @description
 * # myYeomanAppApp
 *
 * Main module of the application.
 */
angular
  .module('myYeomanAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test', {
        templateUrl: 'views/testView.html',
        controller: 'testController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
