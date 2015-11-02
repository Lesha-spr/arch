import React, {Component, PropTypes} from 'react';
import NavActions from './../../actions/nav/NavActions.js';
import NavStore from './../../stores/nav/NavStore.js';
import _ from 'lodash';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        NavStore.addGetListener(this.onGetNav.bind(this));
    }

    componentWillUnmount() {
        NavStore.removeGetListener(this.onGetNav.bind(this));
    }

    onGetNav() {
        // TODO: get project roots
    }

    render() {
        return <div>Projects</div>;
    }
}

export default Projects;