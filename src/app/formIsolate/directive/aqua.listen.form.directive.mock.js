/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
  'use strict';
  window.aquaListenFormMock = window.aquaListenFormMock || {};
  window.aquaListenFormMock.template = {
    default: '<form name="formTop">' +
    '<ng-form name="formListen" aqua-listen-form>' +
    '</ng-form>' +
    '</form>',
    notParent: '<ng-form name="formListen" aqua-listen-form>' +
    '</ng-form>'
  };

})();
