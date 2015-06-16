/**
 * Created by Lionel on 08/06/2015.
 */
(function () {
  'use strict';
  var PRISTINE_CLASS = 'ng-pristine',
    DIRTY_CLASS = 'ng-dirty',
    SUBMITTED_CLASS = 'ng-submitted';


  angular.module('formIsolate')
    .directive('aquaIsolateForm', function ($animate) {
      return {
        restrict: 'A',
        require: '?form',
        link: function (scope, element, attrs, ctrl) {
          if (!ctrl) {
            return;
          }
          // Do a copy of the controller
          var ctrlCopy = {};
          angular.copy(ctrl, ctrlCopy);

          // Get the parent of the form
          var parent = element.parent().controller('form');
          // Remove parent link to the controller
          parent.$removeControl(ctrl);

          // Replace form controller with a "isolated form"
          var isolatedFormCtrl = {
            $setSubmitted: function () {
              $animate.addClass(element, SUBMITTED_CLASS);
              ctrl.$submitted = true;
            },
            $setValidity: function (validationToken, isValid, control) {
              ctrlCopy.$setValidity(validationToken, isValid, control);
              parent.$setValidity(validationToken, true, ctrl);
            },
            $setDirty: function () {
              $animate.removeClass(element, PRISTINE_CLASS);
              $animate.addClass(element, DIRTY_CLASS);
              ctrl.$dirty = true;
              ctrl.$pristine = false;
            }
          };
          angular.extend(ctrl, isolatedFormCtrl);
        }
      };
    });
})();