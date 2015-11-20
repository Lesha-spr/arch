import alt from './../../alt.js';

class LocaleActions {
    selectLocale(locale) {
        this.dispatch(locale)
    }
}

export default alt.createActions(LocaleActions);