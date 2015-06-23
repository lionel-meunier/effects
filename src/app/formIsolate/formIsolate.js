/**
 * Created by Lionel on 08/06/2015.
 */
(function () {
  'use strict';
  angular.module('formIsolate', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('formIsolate', {
          url: '/formIsolate',
          controller: 'formIsolateController',
          controllerAs: 'fiCtrl',
          templateUrl: 'app/formIsolate/template/formIsolate.html'
        });
    });

})();
