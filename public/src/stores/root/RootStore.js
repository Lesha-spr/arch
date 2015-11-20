import alt from './../../alt.js';
import RootActions from './../../actions/root/RootActions.js';
import ProjectsStore from './../projects/ProjectsStore.js';

class RootStore {
    constructor() {
        this.bindActions(RootActions);

        this._root = {
            async: false
        };
    }

    asyncBefore() {
        this.waitFor(ProjectsStore);
        this._root.async = true;
    }

    asyncComplete() {
        this.waitFor(ProjectsStore);
        this._root.async = false;
    }

    asyncError() {}
}

export default alt.createStore(RootStore, 'RootStore');