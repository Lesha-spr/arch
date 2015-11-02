import reqwest from 'reqwest';
import {SERVICES} from './../../constants.js';

export default () => {
    return reqwest({
        url: SERVICES.PROJECTS,
        type: 'json',
        method: 'GET'
    });
};