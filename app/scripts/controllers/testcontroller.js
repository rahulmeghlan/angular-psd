'use strict';

/**
 * @ngdoc function
 * @name myYeomanAppApp.controller:TestcontrollerCtrl
 * @description
 * # TestcontrollerCtrl
 * Controller of the myYeomanAppApp
 */
(function ($) {
    angular.module('myYeomanAppApp')
        .controller('testController', function ($scope, Myservice, $location) {
            Myservice.clearState();
            $('.nav').find('li:eq(2)').addClass('active');
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.edit = function () {
                $location.path('/about');
            }
        });
})(typeof jQuery != "undefined" ? jQuery : null);
