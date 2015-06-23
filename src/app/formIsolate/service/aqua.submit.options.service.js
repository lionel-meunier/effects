/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  angular.module('formIsolate')
    .provider('aquaSubmitOptions', aquaSubmitOptionsProvider);

  function aquaSubmitOptionsProvider(){
    var options = {
      onlyValid : true
    };
    var vm = this;

    vm.setOptions = function(newOptions){
      options = newOptions;
    };

    vm.$get = aquaSubmitOptions;

    aquaSubmitOptions.$inject = [];
    /* @ngInject */
    function aquaSubmitOptions(){
      var sevice = {
        getOptions : getOptions
      };

      return service;

      function getOptions(){
        return options;
      }
    }
  }
})();