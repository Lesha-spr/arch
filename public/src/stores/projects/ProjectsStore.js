import alt from './../../alt.js';
import ProjectsActions from './../../actions/projects/ProjectsActions.js';
import RootStore from './../root/RootStore.js'

class ProjectsStore {
    constructor() {
        this.bindActions(ProjectsActions);

        this._projects = {
            projects: [],
            projectsLoading: true
        };
    }

    fetch(data) {
        this._projects = data;
        this._projects.projectsLoading = false;
    }
}

export default alt.createStore(ProjectsStore, 'ProjectsStore');