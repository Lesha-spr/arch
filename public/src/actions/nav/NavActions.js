import Dispatcher from './../../dispatcher.js';
import {Nav} from './../../constants.js';
import navFetch from './navFetch.js';

export default {
    get: () => {
        navFetch()
            .then(data => {
                Dispatcher.dispatch({
                    type: Nav.ActionTypes.NAV_GET,
                    data: data
                });
            });
    }
};