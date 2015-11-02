import Dispatcher from './../../dispatcher.js';
import {Projects} from './../../constants.js';
import projectsFetch from './projectsFetch.js';

export default {
    get: () => {
        projectsFetch()
            .then(data => {
                Dispatcher.dispatch({
                    type: Projects.ActionTypes.PROJECTS_GET,
                    data: data
                });
            });
    }
};