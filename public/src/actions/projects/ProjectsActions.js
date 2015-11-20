import alt from './../../alt.js';
import projectsFetch from './projectsFetch.js';

class ProjectsActions {
    fetch() {
        projectsFetch()
            .then(data => {
                this.dispatch(data);
            });
    }
}

export default alt.createActions(ProjectsActions);