'use strict';

/**
 * @ngdoc function
 * @name myYeomanAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYeomanAppApp
 */
angular.module('myYeomanAppApp')
    .controller('MainCtrl', function ($scope, Myservice) {
        Myservice.clearState();
        var test = new Myservice.checkResource();
//        test.save({id: 15});
//        test.get({id: 15});
        $(".nav").find("li:eq(0)").addClass("active");
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
