import reqwest from 'reqwest';
import {SERVICES} from './../../constants.js';
import async from './../../helpers/async/async.js';

export default () => {
    return reqwest(async({
        url: SERVICES.PROJECTS,
        type: 'json',
        method: 'GET'
    }));
};