import Dispatcher from './../../dispatcher.js';
import {Nav as ActionTypes} from './../../constants.js';
import navFetch from './navFetch.js';

export default {
    get: () => {
        navFetch()
            .then(data => {
                Dispatcher.dispatch({
                    type: ActionTypes.GET,
                    data: data
                });
            });
    }
};