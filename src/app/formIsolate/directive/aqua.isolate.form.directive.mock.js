/**
 * Created by Lionel on 16/06/2015.
 */
(function (window) {
    'use strict';

    window.aquaIsolateFormMock = window.aquaIsolateFormMock || {};
    window.aquaIsolateFormMock.template = {
        default: '<form name="formTop">' +
        '<ng-form name="formIsolate" aqua-isolate-form>' +
        '</ng-form>' +
        '</form>',
        withInput: '<form name="formTop">' +
        '<input type="test" name="inputTop" ng-model="inputTop" required/>' +
        '<ng-form name="formIsolate" aqua-isolate-form>' +
        '<input type="test" name="inputIsolate" ng-model="inputIsolate" required/>' +
        '</ng-form>' +
        '</form>',
        notCtrl: '<div aqua-isolate-form></div>',
        withSubmit: '<form name="formTop">' +
        '<ng-form name="formIsolate" aqua-isolate-form>' +
        '<button aqua-submit="submit()"></button>' +
        '</ng-form>' +
        '</form>'
    };
})(window);
