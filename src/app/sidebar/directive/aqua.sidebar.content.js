/**
 * Created by Lionel on 22/06/2015.
 */
(function () {
  'use strict';

  angular.module('aqua.sidebar')
    .directive('aquaSidebarContent', aquaSidebarContent);

  aquaSidebarContent.$inject = ['$timeout','$animate','$parse','$log','$compile','$q','$document']

  function aquaSidebarContent($timeout, $animate, $parse, $log,  $compile, $q, $document) {
    return {
      restrict: 'E',
      controller: 'AquaSidebarController',
      transclude: true,
      templateUrl: 'app/sidebar/template/aquaSidebarContent.html',
      scope: {
        isOpen: '=?aquaSidebarIsOpen'
      },
      compile: function (element) {
        element.addClass('aqua-sidebar-content');
      }
    };
  }
})();