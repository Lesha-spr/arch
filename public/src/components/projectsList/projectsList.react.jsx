import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import Translate from 'react-translate-component';
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
                    return <div className='projects-list__item' key={project._id}>
                        <h3>
                            <Link className='ui-link' to={`/projects/${project.type}/${project.permalink}`}><Translate content={`projects-${project._id}.title`}/></Link>
                        </h3>
                        <Link to={`/projects/${project.type}/${project.permalink}`}>
                            <img src={project.src} />
                        </Link>
                    </div>;
                })}
            </Images>
        </div>;
    }
}

export default ProjectsList;