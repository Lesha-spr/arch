import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import ProjectsStore from './../../stores/projects/ProjectsStore.js';
import RootActions from './../../actions/root/RootActions.js';

class ProjectsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projects = _.where(this.props.root.projects, {type: this.props.params.category});

        return <ul className='projects-list'>
            {projects.map(project => {
                return <li key={project._id}>{project._id}</li>;
            })}
        </ul>;
    }
}

export default ProjectsList;