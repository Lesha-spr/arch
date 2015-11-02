import React, {Component, PropTypes} from 'react';
import Translate from 'react-translate-component';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = new Date();

        return <footer className='footer'>
            <div className='container'>&copy; <Translate content='global.author'/> {date.getFullYear()}</div>
        </footer>;
    }
}

export default Footer;