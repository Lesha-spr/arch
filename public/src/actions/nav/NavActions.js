import alt from './../../alt.js';
import navFetch from './navFetch.js';

class LocaleActions {
    fetch() {
        navFetch()
            .then(data => {
                this.dispatch(data);
            });
    }
}

export default alt.createActions(LocaleActions);