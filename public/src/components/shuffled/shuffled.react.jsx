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
            <Images {...this.props}>
                <div className='shuffled__inner'>
                    {_.shuffle(this.props.root.projects).map(project => {
                        return <Link key={project._id} to={`/projects/${project.type}/${project.permalink}`} className='ui-link shuffled__item'>
                            <span className='shuffled__item-link'>{project._id}</span>
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
    root: PropTypes.shape({
        projects: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string,
            type: PropTypes.string,
            src: PropTypes.string
        })),
        async: PropTypes.bool
    })
};

export default Shuffled;