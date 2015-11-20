import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';
import NavStore from './../../stores/nav/NavStore.js';
import _ from './../../helpers/lodash.mixins/lodash.mixins.js';

class Subnav extends Component {
    constructor(props) {
        super(props);
        this.state = NavStore.getState();
    }

    componentWillMount() {
        this.setState(NavStore.getState());
    }

    componentDidMount() {
        NavStore.listen(this.onGetNav.bind(this));
    }

    componentWillUnmount() {
        NavStore.unlisten(this.onGetNav.bind(this));
    }

    onGetNav(state) {
        this.setState(state);
    }

    render() {
        return <ul className='subnav'>
            {_.deepWhere(this.state._nav.nav, {type: this.props.type}).map(item => {
                return <li className='subnav__item' key={item._id}>
                    <Link
                        to={item.permalink}
                        className='ui-link ui-link_style1'
                        activeClassName='ui-link_state_active'
                        >
                        <Translate content={`nav-${item._id}.title`}/>
                    </Link>
                </li>;
            })}
        </ul>;
    }
}

export default Subnav;