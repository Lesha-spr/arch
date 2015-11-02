import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router'
import {createHistory} from 'history'
import i18n from './i18n/i18n.js';
import routes from './routes.jsx';

let history = createHistory();

render(
    <Router history={history}>
        {routes}
    </Router>,
    document.getElementById('app')
);