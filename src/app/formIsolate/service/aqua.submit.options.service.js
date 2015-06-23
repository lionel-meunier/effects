/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  angular.module('formIsolate')
    .provider('aquaSubmitOptions', AquaSubmitOptionsProvider);

  function AquaSubmitOptionsProvider() {
    var options = {
      onlyValid: true
    };

    this.setOptions = function (newOptions) {
      options = newOptions;
    };

    this.$get = AquaSubmitOptions;

    AquaSubmitOptions.$inject = [];
    /* @ngInject */
    function AquaSubmitOptions() {
      var service = {
        getOptions: getOptions
      };

      return service;

      function getOptions() {
        return options;
      }
    }
  }
})();
