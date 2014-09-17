'use strict';

/**
 * @ngdoc service
 * @name myYeomanAppApp.myService
 * @description
 * # myService
 * Service in the myYeomanAppApp.
 */
(function ($) {
    angular.module('myYeomanAppApp')
        .service('Myservice', function Myservice($resource) {
            // AngularJS will instantiate a singleton by calling 'new' on this function
            return {
                clearState: function () {
                    $('.nav').find('li').removeClass('active');
                },
                checkResource: function () {
                    return $resource('/recipes/:id', {id: '@id'});
                }

            }
        });
})(typeof jQuery != "undefined" ? jQuery : null);
