/**
 * Created by Lionel on 08/06/2015.
 */
(function(){
  'use strict';
  var SUBMITTED_CLASS = 'ng-submitted';

  angular.module('formIsolate')
    .directive('lmeListenForm',function($animate){
      return {
        restrict: 'A',
        require: ['form', '^^?form'],
        link: function (scope, element, attrs, ctrls) {
          if (!angular.isDefined(ctrls[1])) {
            return;
          }
          var formController = ctrls[0];
          var parentFormController = ctrls[1];

          formController.$setSubmitted = function (broadcast) {
            $animate.addClass(element, SUBMITTED_CLASS);
            formController.$submitted = true;
            if(broadcast !== true){
              formController.$$parentForm.$setSubmitted();
            }
          };

          var killWatch = scope.$watch(function(){
            return parentFormController.$submitted;
          },function(n){
            if(n === true){
              formController.$setSubmitted(true);
            }
          });

          scope.$on('$destroy',function(){
            killWatch();
          });

        }
      };
    });
})();