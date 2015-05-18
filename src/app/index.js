'use strict';

angular.module('effects', ['ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'share'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
