'use strict';

/**
 * @ngdoc directive
 * @name myYeomanAppApp.directive:test
 * @description
 * # test
 */
angular.module('myYeomanAppApp')
    .directive('butterbar', function ($rootScope) {
        return {
            link: function postLink(scope, element, attrs) {
                element.addClass("hide");

                $rootScope.on('$routeChangeStart', function () {
                    element.removeClass("hide");
                });

                $rootScope.on("$routeChangeSuccess", function () {
                    element.addClass('hide');
                });
            }
        };
    })
    .directive('focus', function () {
        return {
            link: function postLink(scope, element, attrs) {
                element[0].focus();
            }
        };
    });
