import Dispatcher from './../../dispatcher.js';
import {Nav as ActionTypes} from './../../constants.js';

export default {
    get: () => {
        Dispatcher.dispatch({
            type: ActionTypes.GET
        });
    }
};