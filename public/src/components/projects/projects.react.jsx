import React, {Component, PropTypes} from 'react';
import Subnav from './../subnav/subnav.react.jsx';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children = this.props.children ? React.cloneElement(this.props.children, this.props) : '';

        return <div className='projects container'>
            <Subnav type='projects'/>
            {children}
        </div>;
    }
}

export default Projects;