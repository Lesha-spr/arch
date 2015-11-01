import {EventEmitter} from 'events';
import Dispatcher from './../../dispatcher.js';
import LocaleActions from './../../actions/locale/LocaleActions.js';
import {Locale, COOKIES, params} from './../../constants.js';
import Cookies from 'cookies-js';
import counterpart from 'counterpart';

const SET_EVENT = 'set';

let _locale = {
    current: params.locale,
    locale: [
        {
            _id: 0,
            title: 'Ru',
            value: 'ru'
        },
        {
            _id: 1,
            title: 'En',
            value: 'en'
        }
    ]
};

class LocaleStore extends EventEmitter {
    constructor() {
        super(arguments);
        counterpart.setLocale(params.locale);
    }

    emitSet() {
        this.emit(SET_EVENT);
    }

    addSetListener(callback) {
        this.on(SET_EVENT, callback);
    }

    removeSetListener(callback) {
        this.removeListener(SET_EVENT, callback);
    }

    getAll() {
        return _locale;
    }
}

let store = new LocaleStore();

store.dispatchToken = Dispatcher.register(action => {

    switch(action.type) {

        case Locale.ActionTypes.LOCALE_SET:
            Cookies.set(COOKIES.locale, action.locale);
            counterpart.setLocale(action.locale);
            _locale.current = action.locale;
            store.emitSet();

            break;
    }

});

export default store;