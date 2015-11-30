import React, {Component, PropTypes} from 'react';
import Translate from 'react-translate-component';
import _ from 'lodash';
import RootActions from './../../actions/root/RootActions.js';
import Images from './../images/images.react.jsx';

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props._projects.projects.length) {
            return false;
        }

        let project = _.findWhere(this.props._projects.projects, {permalink: this.props.params.project});

        return <div className='project-details'>
            <h1><Translate content={`projects-${project._id}.title`}/></h1>
            <h2><Translate content={`projects-${project._id}.lead`}/></h2>
            <Images className='images' async={this.props._root.async} before={RootActions.asyncBefore.bind(RootActions, true)} complete={RootActions.asyncComplete.bind(RootActions, true)}>
                <img
                    src={project.src}
                    alt={project._id}
                    className='project-details__image'
                />
            </Images>
        </div>;
    }
}

export default ProjectDetails;