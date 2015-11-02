import {EventEmitter} from 'events';
import Dispatcher from './../../dispatcher.js';
import {Root} from './../../constants.js';
import ProjectsStore from './../projects/ProjectsStore.js';

const ASYNC_BEFORE_EVENT = 'async_before';
const ASYNC_COMPLETE_EVENT = 'async_complete';

let _root = {
    async: false
};

class RootStore extends EventEmitter {
    constructor() {
        super(arguments);
    }

    emitCompleteAsync() {
        this.emit(ASYNC_COMPLETE_EVENT);
    }

    emitBeforeAsync() {
        this.emit(ASYNC_BEFORE_EVENT);
    }

    addBeforeAsyncListener(callback) {
        this.on(ASYNC_BEFORE_EVENT, callback);
    }

    removeBeforeAsyncListener(callback) {
        this.removeListener(ASYNC_BEFORE_EVENT, callback);
    }

    addCompleteAsyncListener(callback) {
        this.on(ASYNC_COMPLETE_EVENT, callback);
    }

    removeCompleteAsyncListener(callback) {
        this.removeListener(ASYNC_COMPLETE_EVENT, callback);
    }

    getRootState() {
        return _root;
    }
}

let store = new RootStore();

store.dispatchToken = Dispatcher.register(action => {
    Dispatcher.waitFor([ProjectsStore.dispatchToken]);

    switch(action.type) {

        case Root.ActionTypes.ASYNC_BEFORE:
            _root.async = true;

            store.emitBeforeAsync();

            break;

        case Root.ActionTypes.ASYNC_COMPLETE:
            _root.async = false;

            store.emitCompleteAsync();

            break;
    }

});

export default store;