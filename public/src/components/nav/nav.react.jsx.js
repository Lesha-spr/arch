import React, {Component, PropTypes} from 'react';
import NavActions from './../../actions/nav/NavActions.js';
import NavStore from './../../stores/nav/NavStore.js';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = NavStore.getAll();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        NavStore.addGetListener(this.onGet.bind(this));
    }

    componentWillUnmount() {
        NavStore.removeGetListener(this.onGet.bind(this));
    }

    onGet() {
        this.setState(NavStore.getAll());
    }

    handleClick(event) {
        event.preventDefault();
        NavActions.get();
    }

    render() {
        return <div onClick={this.handleClick}>Nav</div>;
    }
}

export default Nav;