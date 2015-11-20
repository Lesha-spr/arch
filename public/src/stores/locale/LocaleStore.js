import alt from './../../alt.js';
import LocaleActions from './../../actions/locale/LocaleActions.js';
import Cookies from 'cookies-js';
import {COOKIES, params} from './../../constants.js';
import counterpart from 'counterpart';

class LocaleStore {
    constructor() {
        counterpart.setLocale(params.locale);
        this.bindActions(LocaleActions);

        this._locale = {
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
    }

    selectLocale(locale) {
        Cookies.set(COOKIES.locale, locale);
        counterpart.setLocale(locale);
        this._locale.current = locale;
    }
}

export default alt.createStore(LocaleStore, 'LocaleStore');