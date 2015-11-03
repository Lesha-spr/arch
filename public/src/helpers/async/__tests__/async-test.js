jest.dontMock('../async');
jest.dontMock('lodash');

var async, data, _;

describe('async', function() {
    beforeEach(function() {
        async = require('../async');
        _ = require('lodash');
        data = {
            url: 'test',
            type: 'html',
            method: 'POST'
        };
    });

    it('should return object', function() {
        var ret = async(data);

        expect(_.isObject(ret)).toBe(true);
    });

    it('should return consistent object', function() {
        var ret = async(data);

        expect(ret.url).toBe(data.url);
        expect(ret.data).toEqual({});
        expect(ret.type).toBe(data.type);
        expect(ret.method).toBe(data.method);
        expect(_.isFunction(ret.beforeSend)).toBe(true);
        expect(_.isFunction(ret.success)).toBe(true);
        expect(_.isFunction(ret.complete)).toBe(true);
        expect(_.isFunction(ret.error)).toBe(true);
    });
});