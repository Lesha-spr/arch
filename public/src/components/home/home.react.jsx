import React, {Component, PropTypes} from 'react';
import Shuffled from './../shuffled/shuffled.react.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='home'>
            <Shuffled {...this.props}/>
        </div>;
    }
}

Home.propTypes = {
    root: PropTypes.shape({
        projects: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string,
            type: PropTypes.string,
            src: PropTypes.string
        })),
        async: PropTypes.bool
    })
};

export default Home;