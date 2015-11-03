import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';
import _ from 'lodash';
import NavStore from './../../stores/nav/NavStore.js';
import deepWhere from './../../helpers/deepWhere/deepWhere.js';

class Subnav extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            nav: _.deepWhere(NavStore.getAll().nav, {type: this.props.type})
        });
    }

    componentDidMount() {
        NavStore.addGetListener(this.onGetNav.bind(this));
    }

    componentWillUnmount() {
        NavStore.removeGetListener(this.onGetNav.bind(this));
    }

    onGetNav() {
        this.setState({
            nav: _.deepWhere(NavStore.getAll().nav, {type: this.props.type})
        });
    }

    render() {
        return <ul className='subnav'>
            {this.state.nav.map(item => {
                return <li className='subnav__item' key={item._id}>
                    <Link
                        to={item.permalink}
                        className='ui-link ui-link_style1'
                        activeClassName='ui-link_state_active'
                        >
                        <Translate content={`nav.${item._id}`}/>
                    </Link>
                </li>;
            })}
        </ul>;
    }
}

export default Subnav;