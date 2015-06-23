/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';

  describe('aqua submit options provider', function () {
    beforeEach(module('formIsolate'));

    var myProvider;

    beforeEach(function(){
      module(function(aquaSubmitOptionsProvider){
        myProvider = aquaSubmitOptionsProvider;
      });
    });

    it('should setOptions returned by service get options',inject(function($injector){
      var newOptions = {};
      myProvider.setOptions(newOptions);
      var myService = $injector.get('aquaSubmitOptions');
      expect(myService.getOptions()).toBe(newOptions);
    }));
  });
})();