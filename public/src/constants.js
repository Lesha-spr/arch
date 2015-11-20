import keyMirror from 'keymirror';
import _ from 'lodash';
import Cookies from 'cookies-js';

const DEFAULTS = {
    locale: 'ru'
};

export const Root = {
    ActionTypes: keyMirror({
        ASYNC_BEFORE: null,
        ASYNC_COMPLETE: null,
        ASYNC_FAIL: null
    })
};

export const COOKIES = {
    locale: 'arch.locale'
};

let settings = {};

Object.keys(COOKIES).forEach(cookie => {
    let value = Cookies.get(COOKIES[cookie]);

    if (value) {
        settings[cookie] = value;
    }
});

export var params = _.assign({}, DEFAULTS, settings);

export const SERVICES = {
    NAV: '/backend/nav',
    PROJECTS: '/backend/projects'
};

export const Nav = {
    ActionTypes: keyMirror({
        NAV_GET: null
    })
};

export const Projects = {
    ActionTypes: keyMirror({
        PROJECTS_GET: null
    })
};

export const Locale = {
    ActionTypes: keyMirror({
        LOCALE_SELECT: null
    })
};