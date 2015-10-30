import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Route Handlers
import Root from './components/root/root.react.jsx.js';
import Home from './components/home/home.react.jsx.js';
import Projects from './components/projects/projects.react.jsx.js';
import NotFound from './components/notFound/notFound.react.jsx.js';

const routes = (
    <Route path='/' component={Root}>
        <IndexRoute component={Home}/>
        <Route path='projects' component={Projects}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;