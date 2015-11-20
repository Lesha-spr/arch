import alt from './../../alt.js';
import NavActions from './../../actions/nav/NavActions.js';

class NavStore {
    constructor() {
        this.bindActions(NavActions);

        this._nav = {
            nav: [],
            loading: true
        };
    }

    fetch(data) {
        this._nav = data;
        this._nav.loading = false;
    }
}

export default alt.createStore(NavStore, 'NavStore');