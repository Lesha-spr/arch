import alt from './../../alt.js';

let shouldWait = false;

class LocaleActions {
    asyncBefore(isWaiting) {
        shouldWait = shouldWait || isWaiting;
        this.dispatch(arguments);
    }

    asyncComplete(isStopped) {
        if (shouldWait) {
            if (isStopped) {
                this.dispatch(...arguments);

                shouldWait = false;
            }
        } else {
            this.dispatch(...arguments);
        }
    }

    asyncError() {
        this.dispatch(...arguments);
    }
}

export default alt.createActions(LocaleActions);