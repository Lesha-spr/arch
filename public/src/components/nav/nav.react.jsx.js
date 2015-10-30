import React, {Component, PropTypes} from 'react';
import NavActions from './../../actions/nav/NavActions.js';
import NavStore from './../../stores/nav/NavStore.js';

import NavItem from './../nav__item/nav__item.react.jsx.js';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = NavStore.getAll();
    }

    componentDidMount() {
        NavStore.addGetListener(this.onGet.bind(this));
        NavActions.get();
    }

    componentWillUnmount() {
        NavStore.removeGetListener(this.onGet.bind(this));
    }

    onGet() {
        this.setState(NavStore.getAll());
    }

    render() {
        return <nav className='nav'>
            {this.state.nav.map(item => {
                return <NavItem key={item._id} {...item}/>;
            })}
        </nav>;
    }
}

Nav.propTypes = {
    isHeader: PropTypes.bool
};

export default Nav;