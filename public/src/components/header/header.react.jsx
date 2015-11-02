import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import Translate from 'react-translate-component';
import Nav from './../nav/nav.react.jsx';
import Locale from './../locale/locale.react.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className='header'>
            <div className='container'>
                <h2>
                    <IndexLink className='ui-link' activeClassName='ui-link_state_active' to='/'><Translate content='global.author'/></IndexLink>
                </h2>
                <Nav isHeader={true}/>
                <Locale/>
            </div>
        </header>;
    }
}

export default Header;