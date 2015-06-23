/**
 * Created by Lionel on 08/06/2015.
 */
(function () {
  'use strict';
  angular.module('formIsolate')
    .controller('formIsolateController', function ($log) {
      this.model = {};
      this.modelIsolate = {};
      this.save = angular.copy(this.model);
      this.saveIsolate = angular.copy(this.modelIsolate);

      this.displayForm = {
        isolate: false,
        classic: false,
        listen: false
      };

      this.submit = function () {
        $log.info('submit form model');
        if (this.form.$valid) {
          $log.info('save model', this.model);
          this.save = angular.copy(this.model);
        }
      };

      this.submitIsolate = function () {
        $log.info('submit isolateForm model');
        if (this.isolateForm.$valid) {
          $log.info('save isolateForm model', this.model);
          this.saveIsolate = angular.copy(this.modelIsolate);
        }
      };

      this.reset = function () {
        $log.info('reset model', this.model);
        this.model = angular.copy(this.save);
        this.form.$setPristine();
      };

      this.resetIsolate = function () {
        $log.info('reset isolateForm model', this.modelIsolate);
        this.modelIsolate = angular.copy(this.saveIsolate);
        this.isolateForm.$setPristine();
      };

    });
})();
