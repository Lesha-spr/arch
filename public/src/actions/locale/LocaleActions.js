import Dispatcher from './../../dispatcher.js';
import {Locale} from './../../constants.js';

export default {
    setLocale: (locale) => {
        Dispatcher.dispatch({
            type: Locale.ActionTypes.LOCALE_SET,
            locale: locale
        });
    }
};