import React, {Component, PropTypes} from 'react';
import Shuffled from './../shuffled/shuffled.react.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='home'>
            <Shuffled projects={this.props.root.projects}/>
        </div>;
    }
}

Home.propTypes = {
    root: PropTypes.shape({
        projects: PropTypes.array,
        loading: PropTypes.bool
    })
};

export default Home;