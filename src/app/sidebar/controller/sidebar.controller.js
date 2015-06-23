/**
 * Created by Lionel on 22/06/2015.
 */
(function () {
  'use strict';
  angular.module('aqua.sidebar')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = [];

  function SidebarController() {
    var vm = this;

    vm.isOpen = false;
    vm.isAnimating = false;

    //var morphEl = document.getElementById( 'morph-shape' ),
    //  s = Snap( morphEl.querySelector( 'svg' )),
    //  path = s.select( 'path' );
    //
    //var initialPath = path.attr('d'),
    //  pathOpen = morphEl.getAttribute( 'data-morph-open' );
    //
    //vm.toggleOpen = function(){
    //  if( vm.isAnimating ) {
    //    return false;
    //  }
    //  vm.isAnimating = true;
    //  if(vm.isOpen){
    //    $timeout( function() {
    //      // reset path
    //      path.attr( 'd', initialPath );
    //      vm.isAnimating = false;
    //    }, 300);
    //  } else {
    //
    //
    //    //path.animate( { 'd' : pathOpen }, 400, mina.easeinout, function() {
    //    //  vm.isAnimating = false;
    //    //});
    //  }
    //  vm.isOpen =! vm.isOpen;
    //}

  }
})();
