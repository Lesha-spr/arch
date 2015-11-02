import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';
import Spinner from './../spinner/spinner.react.jsx';
import classNames from 'classnames';
import _ from 'lodash';

class Shuffled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

        this.loadedProjectsCount = 0;
    }

    handleLoad() {
        this.loadedProjectsCount++;

        if (this.loadedProjectsCount === this.props.projects.length) {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        let className = classNames({
            'shuffled': true,
            'shuffled_state_loading': this.state.loading
        });
        let spinner = this.state.loading ? <Spinner/> : '';

        return <div className={className}>
            {spinner}
            <div className='shuffled__inner'>
                {_.shuffle(this.props.projects).map(project => {
                    return <Link key={project._id} to={`/projects/${project.type}/${project.permalink}`} className='ui-link shuffled__item'>
                        <span className='shuffled__item-link'>{project._id}</span>
                        <img
                            onLoad={this.handleLoad.bind(this)}
                            onError={this.handleLoad.bind(this)}
                            src={project.src}
                            alt={project._id}
                            className='shuffled__item-image'
                        />
                    </Link>;
                })}
            </div>
        </div>;
    }
}

Shuffled.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        type: PropTypes.string,
        src: PropTypes.string
    }))
};

export default Shuffled;