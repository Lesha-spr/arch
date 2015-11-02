import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Translate from 'react-translate-component';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let children;

        if (this.props.children) {
            children = <div className="nav__item_sub">
                {this.props.children.map(function(item) {
                    return <NavItem key={item._id} {...item}></NavItem>;
                })}
            </div>;
        }

        return <div className='nav__item'>
            <Link className='ui-link' activeClassName='ui-link_state_active' to={this.props.permalink}>
                <Translate content={`nav.${this.props.title}`}></Translate>
            </Link>
            {children}
        </div>;
    }
}

NavItem.propTypes = {
    permalink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavItem;