import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import Images from './../images/images.react.jsx';
import ProjectsStore from './../../stores/projects/ProjectsStore.js';
import RootActions from './../../actions/root/RootActions.js';

class ProjectsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let projects = _.where(this.props.root.projects, {type: this.props.params.category});

        return <div className='projects-list'>
            <Images {...this.props}>
                {projects.map(project => {
                    return <div key={project._id}>
                        <img src={project.src} />
                    </div>;
                })}
            </Images>
        </div>;
    }
}

export default ProjectsList;