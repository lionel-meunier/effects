/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  angular.module('formIsolate')
    .directive('aquaSubmit', ['aquaSubmitOptions', function (aquaSubmitOptions) {
      return {
        restrict: 'A',
        require: ['?form', '^^?form'],
        scope: {
          fn: '&aquaSubmit',
          option: '=aquaSubmitOption'
        },
        link: function (scope, element, attrs, ctrls) {
          _.extend(scope.option, aquaSubmitOptions.getOptions());
          var formController,
            isForm = false;
          if (!_.isNull(ctrls[0])) {
            formController = ctrls[0];
            isForm = true;
          } else if (!_.isNull(ctrls[1])) {
            formController = ctrls[1];
          } else {
            return;
          }
          function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            scope.$apply(function () {
              formController.$commitViewValue();
              formController.$setSubmitted();
            });
            if (!_.isUndefined(scope.option)) {
              if (scope.option.onlyValid === true &&
                formController.$invalid === true) {
                return;
              }
            }
            scope.fn({$event: e});
          }

          if (isForm === true) {
            element.on('click', '[type=submit]', onClick);
          } else {
            element.on('click', onClick);
          }
        }
      };
    }]);
})();
