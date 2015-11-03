jest.dontMock('./../projectsFetch');

describe('projectsFetch', function() {
    var reqwest;
    var projectsFetch;

    beforeEach(function() {
        reqwest = require('reqwest');
        projectsFetch = require('./../projectsFetch');
    });

    it('should call async request', function() {
        projectsFetch();

        expect(reqwest).toBeCalled();
    });
});