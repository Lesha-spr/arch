jest.dontMock('./../navFetch');

describe('navFetch', function() {
    var SERVICES = require('./../../../constants').SERVICES;
    var reqwest;
    var navFetch;

    beforeEach(function() {
        reqwest = require('reqwest');
        navFetch = require('./../navFetch');
    });

    it('should call async request', function() {
        navFetch();

        expect(reqwest).toBeCalledWith({
            url: SERVICES.NAV,
            type: 'json',
            method: 'GET'
        });
    });
});