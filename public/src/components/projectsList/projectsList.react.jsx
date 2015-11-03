import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import ProjectsStore from './../../stores/projects/ProjectsStore.js';
import RootActions from './../../actions/root/RootActions.js';

class ProjectsList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            projects: ProjectsStore.getAll().projects
        };
    }

    // TODO: update only on new category
    shouldComponentUpdate() {}

    componentWillReceiveProps(nextProps) {
        let projects = _.where(ProjectsStore.getAll().projects, {type: nextProps.params.category});

        this.setState({
            projects: projects
        });
    }

    render() {
        console.log(this.state);
        return <ul className='projects-list'>

        </ul>;
    }
}

export default ProjectsList;