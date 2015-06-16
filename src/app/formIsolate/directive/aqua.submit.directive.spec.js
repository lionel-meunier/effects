/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  describe('aqua submit directive', function () {
    beforeEach(module('formIsolate'));

    var $compile,
      $rootScope,
      scope,
      element;

    var createDirective = function (template) {
      if (_.isUndefined(template)) {
        template = window.aquaSubmitMock.template.default;
      }
      element = $compile(template)(scope);
      $rootScope.$digest();
    };

    beforeEach(inject(function ($injector) {
      $compile = $injector.get('$compile');
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();
      scope.submit = function () {
      };
    }));

    describe('is not in form', function () {
      it('click not listen', function () {
        createDirective(window.aquaSubmitMock.template.notForm);
        var e = $.Event('click');
        spyOn(e, 'preventDefault');
        element.trigger(e);
        expect(e.preventDefault).not.toHaveBeenCalled();
      });
    });

    describe('is button', function () {
      it('click button submit form', function () {
        createDirective();
        spyOn(scope.form, '$commitViewValue');
        spyOn(scope.form, '$setSubmitted');
        var e = $.Event('click');
        spyOn(e, 'preventDefault');
        spyOn(e, 'stopPropagation');
        element.find('button').trigger(e);
        scope.$digest();
        expect(scope.form.$commitViewValue).toHaveBeenCalled();
        expect(scope.form.$setSubmitted).toHaveBeenCalled();
        expect(e.preventDefault).toHaveBeenCalled();
        expect(e.stopPropagation).toHaveBeenCalled();
      });
    });

    describe('is form', function () {
      it('click button submit form', function () {
        createDirective(window.aquaSubmitMock.template.inForm);
        spyOn(scope.form, '$commitViewValue');
        spyOn(scope.form, '$setSubmitted');
        spyOn(scope, 'submit');
        var e = $.Event('click');
        spyOn(e, 'preventDefault');
        spyOn(e, 'stopPropagation');
        element.find('button').trigger(e);
        scope.$digest();
        expect(scope.form.$commitViewValue).toHaveBeenCalled();
        expect(scope.form.$setSubmitted).toHaveBeenCalled();
        expect(e.preventDefault).toHaveBeenCalled();
        expect(e.stopPropagation).toHaveBeenCalled();
        expect(scope.submit).toHaveBeenCalled();
      });
    });

    describe('with option', function () {
      describe('onlyValid', function () {
        it('submit if form is valid', function () {
          scope.option = {
            onlyValid: true
          };
          createDirective(window.aquaSubmitMock.template.withOption);
          spyOn(scope, 'submit');
          element.find('button').trigger('click');
          scope.$digest();
          expect(scope.submit).not.toHaveBeenCalled();
          scope.test = 'test';
          element.find('button').trigger('click');
          scope.$digest();
          expect(scope.submit).toHaveBeenCalled();
        });
      });
    });

  });
})();