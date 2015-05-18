/**
 * Created by lmeunier on 18/05/15.
 */
(function(){

  angular.module('share',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('share', {
          url: '/share',
          templateUrl: 'app/share/template/share.html'
        });

      $urlRouterProvider.otherwise('/');
    });

})();
