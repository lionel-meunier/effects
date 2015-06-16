/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  describe('aqua isolate form directive',function(){
    beforeEach(module('formIsolate'));

    var $compile,
      $rootScope,
      scope,
      element;

    var createDirective = function(template){
      if(_.isUndefined(template)){
        template = window.aquaIsolateFormMock.template.default;
      }
      element = $compile(template)(scope);
      $rootScope.$digest();
    };

    beforeEach(inject(function($injector){
      $compile = $injector.get('$compile');
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();
    }));
    describe('isolate form not updated by form top',function(){
      it('submitted',function(){
        createDirective();
        scope.formTop.$setSubmitted();
        expect(scope.formIsolate.$submitted).toBe(false);
      });

      it('dirty',function(){
        createDirective();
        scope.formTop.$setDirty();
        expect(scope.formIsolate.$dirty).toBe(false);
      });

      it('validity',function(){
        createDirective(window.aquaIsolateFormMock.template.withInput);
        expect(scope.formTop.$valid).toBe(false);
        expect(scope.formIsolate.$valid).toBe(false);
        scope.inputTop = 'test';
        scope.$digest();
        expect(scope.formTop.$valid).toBe(true);
        expect(scope.formIsolate.$valid).toBe(false);
      });

    });
    describe('form top not updated by isolate form',function(){
      it('submitted',function(){
        createDirective();
        scope.formIsolate.$setSubmitted();
        expect(scope.formTop.$submitted).toBe(false);
      });

      it('dirty',function(){
        createDirective();
        scope.formIsolate.$setDirty();
        expect(scope.formTop.$dirty).toBe(false);
      });

      it('validity',function(){
        createDirective(window.aquaIsolateFormMock.template.withInput);
        expect(scope.formIsolate.$valid).toBe(false);
        expect(scope.formTop.$valid).toBe(false);
        scope.inputIsolate = 'test';
        scope.$digest();
        expect(scope.formIsolate.$valid).toBe(true);
        expect(scope.formTop.$valid).toBe(false);
      });
    });

    describe('has not form controller',function(){
      it('not throw error',function(){
        var fn = function(){
          createDirective(window.aquaIsolateFormMock.template.notCtrl);
        };
        expect(fn).not.toThrow();
      });
    });

  });
})();