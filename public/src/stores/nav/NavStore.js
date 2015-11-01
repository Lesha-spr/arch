import {EventEmitter} from 'events';
import Dispatcher from './../../dispatcher.js';
import NavActions from './../../actions/nav/NavActions.js';
import {Nav} from './../../constants.js';

const GET_EVENT = 'get';

let _nav = {
    nav: [],
    loading: true
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

        case Nav.ActionTypes.NAV_GET:
            _nav = action.data;
            _nav.loading = false;

            store.emitGet();

            break;
    }

});

export default store;