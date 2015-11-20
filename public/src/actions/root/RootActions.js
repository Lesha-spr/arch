import alt from './../../alt.js';

class LocaleActions {
    constructor() {
        this.shouldWait = false;
    }

    asyncBefore(isWaiting) {
        this.shouldWait = this.shouldWait || isWaiting;
        this.dispatch(arguments);
    }

    asyncComplete(isStopped) {
        if (this.shouldWait) {
            if (isStopped) {
                this.dispatch(...arguments);

                this.shouldWait = false;
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