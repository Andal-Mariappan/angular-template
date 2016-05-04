'use strict';

/**
 * @ngdoc overview
 * @name angularTemplateApp
 * @description
 * # angularTemplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularTemplateApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
