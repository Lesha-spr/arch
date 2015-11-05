import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import RootActions from './../../actions/root/RootActions.js';

class Images extends Component {
    constructor(props) {
        super(props);

        this.imagesLoadedLength = 0;
        this.imagesLength = 0;
    }

    componentWillMount() {
        RootActions.asyncBefore(true);
    }

    _handleLoad() {
        this.imagesLoadedLength++;

        if (this.imagesLoadedLength === this.imagesLength) {
            RootActions.asyncComplete(true);
        }
    }

    componentWillReceiveProps() {
        this.imagesLoadedLength = 0;
        this.imagesLength = 0;
    }

    _recursiveCloneChildren(children, index) {
        return React.Children.map(children, (child, i) => {
            var $idx = index || i;

            if (!_.isObject(child)) {
                return child;
            }

            var childProps = {};

            if (child.type === 'img') {
                this.imagesLength++;

                childProps.onLoad = this._handleLoad.bind(this);
                childProps.onError = this._handleLoad.bind(this);
            }

            childProps.children = this._recursiveCloneChildren(child.props.children, $idx);

            return React.cloneElement(child, childProps);
        }, this);
    }

    render() {
        let className = classNames({
            'images': true,
            'images_state_loading': this.props.root.async
        });

        return <div {...this.props} className={className}>
            {this._recursiveCloneChildren(this.props.children, 0)}
        </div>;
    }
}

export default Images;