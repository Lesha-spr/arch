jest.dontMock('./../projectsFetch');

describe('projectsFetch', function() {
    var SERVICES = require('./../../../constants').SERVICES;
    var reqwest;
    var projectsFetch;

    beforeEach(function() {
        reqwest = require('reqwest');
        projectsFetch = require('./../projectsFetch');
    });

    it('should call async request', function() {
        projectsFetch();

        expect(reqwest).toBeCalledWith({
            url: SERVICES.PROJECTS,
            type: 'json',
            method: 'GET'
        });
    });
});