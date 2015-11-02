import Dispatcher from './../../dispatcher.js';
import {Root} from './../../constants.js';
import RootActions from './../../actions/root/RootActions.js';
import _ from 'lodash';

export default (params) => {
    return {
        url: params.url,
        data: params.data || {},
        type: params.type || 'json',
        method: params.method || 'GET',
        beforeSend: () => {
            RootActions.asyncBefore();

            (params.beforeSend || _.noop)(...arguments);
        },
        success: () => {
            (params.success || _.noop)(...arguments);
        },
        complete: () => {
            RootActions.asyncComplete();

            (params.complete || _.noop)(...arguments);
        },
        error: () => {
            RootActions.asyncError(...arguments);

            (params.error || _.noop)(...arguments);
        }
    }
}