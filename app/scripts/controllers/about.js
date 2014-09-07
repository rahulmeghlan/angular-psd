'use strict';

/**
 * @ngdoc function
 * @name myYeomanAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYeomanAppApp
 */
angular.module('myYeomanAppApp')
    .controller('AboutCtrl', function ($scope, Myservice) {
        Myservice.clearState();
        $(".nav").find("li:eq(1)").addClass("active");
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
