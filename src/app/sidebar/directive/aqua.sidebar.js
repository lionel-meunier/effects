/**
 * Created by Lionel on 22/06/2015.
 */
(function () {
  'use strict';

  angular.module('aqua.sidebar')
    .controller('AquaSidebarController', AquaSidebarController)
    .directive('aquaSidebar', aquaSidebar);

  aquaSidebar.$inject = ['$timeout', '$animate', '$parse', '$log', '$compile', '$q', '$document']

  function aquaSidebar() {
    return {
      restrict: 'E',
      controller: 'AquaSidebarController',
      controllerAs: 'aquaSidebar',
      templateUrl: 'app/sidebar/template/aquaSidebar.html',
      transclude: true,
      bindToController: true,
      scope: {
        isOpen: '=?aquaSidebarIsOpen'
      }
    };
  }

  AquaSidebarController.$inject = ['$scope', '$element', '$attrs', '$q'];

  function AquaSidebarController($scope, $element, $attrs, $q) {
    var vm = this;
    var wrap = $element.parent('.aqua-sidebar-wrap');

    vm.toggleOpen = function () {
      $scope.isOpen = !$scope.isOpen;
    };


    $scope.$watch('isOpen', updateIsOpen);

    function updateIsOpen(isOpen) {
      console.log('updateIsOpen',isOpen);
      if(isOpen === true){
        wrap.addClass('sidebar-open');
      } else {
        wrap.removeClass('sidebar-open');
      }
    }
  }

})();