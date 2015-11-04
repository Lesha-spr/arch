import {EventEmitter} from 'events';
import Dispatcher from './../../dispatcher.js';
import NavActions from './../../actions/nav/NavActions.js';
import {Projects} from './../../constants.js';

const GET_EVENT = 'get';

let _projects = {
    projects: [],
    projectsLoading: true
};

class ProjectsStore extends EventEmitter {
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
        return _projects;
    }
}

let store = new ProjectsStore();

store.dispatchToken = Dispatcher.register(action => {

    switch(action.type) {

        case Projects.ActionTypes.PROJECTS_GET:
            _projects = action.data;
            _projects.projectsLoading = false;

            store.emitGet();

            break;
    }

});

export default store;