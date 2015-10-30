import {EventEmitter} from 'events';
import reqwest from 'reqwest';
import Dispatcher from './../../dispatcher.js';
import NavActions from './../../actions/nav/NavActions.js';
import {Nav, SERVICES as ActionTypes, SERVICES} from './../../constants.js';

const GET_EVENT = 'get';

let _nav = {
    nav: []
};

let fetch = () => {
    return reqwest({
        url: SERVICES.NAV,
        type: 'json',
        method: 'GET',
        success: data => {
            if (data) {
                _nav = data
            }
        }
    });
};

class NavStore extends EventEmitter {
    constructor() {
        super(arguments);
    }

    emitGet() {
        this.emit(GET_EVENT);
    }

    addGetListener(callback) {
        this.on(GET_EVENT, callback);
    }

    removeGetListener(callback) {
        this.removeListener(GET_EVENT, callback);
    }

    getAll() {
        return _nav;
    }
}

let store = new NavStore();

store.dispatchToken = Dispatcher.register(action => {

    switch(action.type) {

        case ActionTypes.GET:
            fetch()
                .then(() => {
                    store.emitGet();
                });

            break;
    }

});

export default store;