import Dispatcher from './../../dispatcher.js';
import {Root} from './../../constants.js';

let shouldWait;

export default {
    asyncBefore: (isWaiting) => {
        shouldWait = shouldWait || isWaiting;

        Dispatcher.dispatch({
            type: Root.ActionTypes.ASYNC_BEFORE,
            args: [...arguments]
        });
    },

    asyncComplete: (isStopped) => {
        if (shouldWait) {
            if (isStopped) {
                Dispatcher.dispatch({
                    type: Root.ActionTypes.ASYNC_COMPLETE,
                    args: [...arguments]
                });

                shouldWait = false;
            }
        } else {
            Dispatcher.dispatch({
                type: Root.ActionTypes.ASYNC_COMPLETE,
                args: [...arguments]
            });
        }
    },

    asyncError: () => {
        Dispatcher.dispatch({
            type: Root.ActionTypes.ASYNC_FAIL,
            args: [...arguments]
        });
    }
};