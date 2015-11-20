import _ from 'lodash';

let deepWhere = (collection, predicate) => {
    let ret = [];

    function rec(collection) {
        ret.push(..._.where(collection, predicate));

        if (_.isObject(collection)) {
            _.forEach(collection, value => {
                rec(value);
            });
        }
    }

    rec(collection);

    return ret;
};

export default deepWhere;