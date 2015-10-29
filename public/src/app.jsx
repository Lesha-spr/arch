import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes.jsx.js';

let history = createBrowserHistory();

render(
    <Router history={history}>
        {routes}
    </Router>,
    document.getElementById('app')
);