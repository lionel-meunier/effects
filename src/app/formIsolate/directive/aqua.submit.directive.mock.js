/**
 * Created by Lionel on 16/06/2015.
 */
(function () {
    'use strict';

    window.aquaSubmitMock = window.aquaSubmitMock || {};

    window.aquaSubmitMock.template = {
        default: '<ng-form name="form">' +
        '<button type="button" aqua-submit="submit()"></button>' +
        '</ng-form>',
        notForm: '<button type="button" aqua-submit="submit()"></button>',
        inForm: '<ng-form name="form" aqua-submit="submit()">' +
        '<button type="submit"></button>' +
        '</ng-form>',
        withOption: '<ng-form name="form">' +
        '<input name="test" ng-model="test" required/>' +
        '<button aqua-submit="submit()" aqua-submit-option="option"></button>' +
        '</ng-form>'
    };
})();
