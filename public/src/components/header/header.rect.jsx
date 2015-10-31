import React, {Component, PropTypes} from 'react';
import {IndexLink} from 'react-router';
import Nav from './../nav/nav.react.jsx.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className='header'>
            <h2>
                <IndexLink className='ui-link' activeClassName='ui-link_state_active' to='/'>Tka4</IndexLink>
            </h2>
            <Nav isHeader={true}/>
        </header>;
    }
}

export default Header;