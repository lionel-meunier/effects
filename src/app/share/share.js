/**
 * Created by lmeunier on 18/05/15.
 */
(function () {
  'use strict';
  angular.module('share', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('share', {
          url: '/share',
          templateUrl: 'app/share/template/share.html'
        });
    });

})();
