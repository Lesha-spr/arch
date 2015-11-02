jest.dontMock('keymirror');
jest.dontMock('./../../../constants');
jest.dontMock('./../NavStore');

describe('NavStore', function() {
    var Constants = require('./../../../constants').Nav;
    var Dispatcher;
    var NavStore;
    var callback;
    var emptyStoreData;

    beforeEach(function() {
        Dispatcher = require('./../../../dispatcher');
        NavStore = require('./../NavStore');
        emptyStoreData = {
            nav: [],
            loading: true
        };
        callback = Dispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function() {
        expect(Dispatcher.register.mock.calls.length).toBe(1);
    });

    it('should initialize with no nav items', function() {
        expect(NavStore.getAll()).toEqual(emptyStoreData);
    });

    it('should update nav', function() {
        callback({
            type: Constants.ActionTypes.NAV_GET,
            data: {
                nav: []
            }
        });

        expect(NavStore.getAll()).not.toEqual(emptyStoreData);
    });
});