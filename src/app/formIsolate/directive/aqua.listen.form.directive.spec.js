/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';
  describe('aqua listen form directive',function(){
    beforeEach(module('formIsolate'));

    var $compile,
      $rootScope,
      scope,
      element;

    var createDirective = function(template){
      if(_.isUndefined(template)){
        template = window.aquaListenFormMock.template.default;
      }
      element = $compile(template)(scope);
      $rootScope.$digest();
    };

    beforeEach(inject(function($injector){
      $compile = $injector.get('$compile');
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();
    }));

    describe('listen form updated by form top',function(){
      it('submitted',function(){
        createDirective();
        scope.formTop.$setSubmitted();
        scope.$digest();
        expect(scope.formListen.$submitted).toBe(true);
      });
    });

    describe('form top updated by listen form',function(){
      it('submitted',function(){
        createDirective();
        scope.formListen.$setSubmitted();
        scope.$digest();
        expect(scope.formTop.$submitted).toBe(true);
      });
    });

    describe('has not form parent',function(){
      it('not change form',function(){
        var fn = function(){
          createDirective(window.aquaListenFormMock.template.notParent);
        };
        expect(fn).not.toThrow();
      });
    });

    describe('destroy kill watch',function(){
      it('not update form listen with form top',function(){
        createDirective();
        var isolateScope = element.find('[aqua-listen-form]').isolateScope();
        isolateScope.$destroy();
        scope.$digest();
        scope.formTop.$setSubmitted();
        scope.$digest();
        expect(scope.formListen.$submitted).toBe(false);
      });
    });

  });

})();