import React, {Component, PropTypes} from 'react';
import NavActions from './../../actions/nav/NavActions.js';
import NavStore from './../../stores/nav/NavStore.js';
import classNames from 'classnames';

import NavItem from './nav__item.react.jsx';

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
        let className = classNames({
            'nav': true,
            'nav_state_loading': this.state.loading
        });

        return <nav className={className}>
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