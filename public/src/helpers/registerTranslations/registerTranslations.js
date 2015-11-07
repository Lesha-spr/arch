import _ from 'lodash';
import counterpart from 'counterpart';

export default (data) => {
    let ns = Object.keys(data)[0];

    function rec(collection) {
        _.forEach(collection, item => {
            if (item.i18n) {

                _.forEach(item.i18n, (locale, localeKey) => {
                    let localization = {};
                    localization[`${ns}-${item._id}`] = {};

                    _.forEach(locale, (translation, translationKey) => {
                        localization[`${ns}-${item._id}`][translationKey] = translation;
                    });

                    counterpart.registerTranslations(localeKey, localization);
                });
            }

            if (_.isObject(item)) {
                rec(item);
            }
        });
    }

    rec(data);
};