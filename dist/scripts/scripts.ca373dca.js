"use strict";angular.module("myYeomanAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/test",{templateUrl:"views/testView.html",controller:"testController"}).otherwise({redirectTo:"/"})}]),angular.module("myYeomanAppApp").controller("MainCtrl",["$scope","Myservice",function(a,b){b.clearState();new b.checkResource;$(".nav").find("li:eq(0)").addClass("active"),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myYeomanAppApp").controller("AboutCtrl",["$scope","Myservice",function(a,b){b.clearState(),$(".nav").find("li:eq(1)").addClass("active"),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myYeomanAppApp").service("Myservice",["$resource",function(a){return{clearState:function(){$(".nav").find("li").removeClass("active")},checkResource:function(){return a("/recipes/:id",{id:"@id"})}}}]),angular.module("myYeomanAppApp").controller("testController",["$scope","Myservice","$location",function(a,b,c){b.clearState(),$(".nav").find("li:eq(2)").addClass("active"),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.edit=function(){c.path("/about")}}]),angular.module("myYeomanAppApp").directive("butterbar",["$rootScope",function(a){return{link:function(b,c){c.addClass("hide"),a.on("$routeChangeStart",function(){c.removeClass("hide")}),a.on("$routeChangeSuccess",function(){c.addClass("hide")})}}}]).directive("focus",function(){return{link:function(a,b){b[0].focus()}}});