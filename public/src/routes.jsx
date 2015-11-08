import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Route Handlers
import Root from './components/root/root.react.jsx';
import Home from './components/home/home.react.jsx';
import Projects from './components/projects/projects.react.jsx';
import ProjectsList from './components/projectsList/projectsList.react.jsx';
import ProjectDetails from './components/projectDetails/projectDetails.react.jsx';
import NotFound from './components/notFound/notFound.react.jsx';

const routes = (
    <Route path='/' component={Root}>
        <IndexRoute component={Home}/>
        <Route path='projects' component={Projects}>
            <Route path=':category' component={ProjectsList}/>
            <Route path=':category/:project' component={ProjectDetails}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;