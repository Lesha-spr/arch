import React, {Component, PropTypes} from 'react';
import NavActions from './../../actions/nav/NavActions.js';
import NavStore from './../../stores/nav/NavStore.js';
import classNames from 'classnames';

import NavItem from './nav__item.react.jsx';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = NavStore.getState();
    }

    componentDidMount() {
        NavStore.listen(this.onGet.bind(this));
        NavActions.fetch();
    }

    componentWillUnmount() {
        NavStore.unlisten(this.onGet.bind(this));
    }

    onGet(state) {
        this.setState(state);
    }

    render() {
        let className = classNames({
            'nav': true,
            'nav_state_loading': this.state._nav.loading
        });

        return <nav className={className}>
            {this.state._nav.nav.map(item => {
                return <NavItem key={item._id} {...item}/>;
            })}
        </nav>;
    }
}

Nav.propTypes = {
    isHeader: PropTypes.bool
};

export default Nav;