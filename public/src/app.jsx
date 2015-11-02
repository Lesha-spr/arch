import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import i18n from './i18n/i18n.js';

import routes from './routes.jsx';

let history = createBrowserHistory();

render(
    <Router history={history}>
        {routes}
    </Router>,
    document.getElementById('app')
);