/**
 * Created by Lionel on 22/06/2015.
 */
(function () {
    'use strict';
    angular.module('aqua.sidebar', ['ui.router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('sidebar', {
                    url: '/sidebar',
                    controller: 'SidebarController',
                    controllerAs: 'sidebarController',
                    templateUrl: 'app/sidebar/template/sidebar.html'
                });
        });

})();
