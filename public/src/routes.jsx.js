import React from 'react';
import {Route} from 'react-router';

// Route Handlers
import Root from './components/root/root.react.jsx.js';
import Projects from './components/projects/projects.react.jsx.js';

const routes = (
    <Route path='/' component={Root}>
        <Route path='projects' component={Projects} />
    </Route>
);

export default routes;