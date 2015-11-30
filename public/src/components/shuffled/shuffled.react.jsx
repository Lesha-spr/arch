import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';
import Images from './../images/images.react.jsx';
import RootActions from './../../actions/root/RootActions.js';
import Spinner from './../spinner/spinner.react.jsx';
import _ from 'lodash';

class Shuffled extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='shuffled'>
            <Images className='images' async={this.props._root.async} before={RootActions.asyncBefore.bind(RootActions, true)} complete={RootActions.asyncComplete.bind(RootActions, true)}>
                <div className='shuffled__inner'>
                    {_.shuffle(this.props._projects.projects).map(project => {
                        return <Link key={project._id} to={`/projects/${project.type}/${project.permalink}`} className='ui-link shuffled__item'>
                            <span className='shuffled__item-link'><Translate content={`projects-${project._id}.title`}/></span>
                            <img
                                src={project.src}
                                alt={project._id}
                                className='shuffled__item-image'
                            />
                        </Link>;
                    })}
                </div>
            </Images>
        </div>;
    }
}

Shuffled.propTypes = {
    _root: PropTypes.shape({
        async: PropTypes.bool
    }),
    _projects: PropTypes.shape({
        projects: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string,
                permalink: PropTypes.string,
                src: PropTypes.string
            })
        )
    })
};

export default Shuffled;