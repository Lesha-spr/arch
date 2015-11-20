import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class Images extends Component {
    constructor(props) {
        super(props);

        this._images = {};
    }

    componentWillMount() {
        (this.props.before || _.noop)();
    }

    _handleLoad(src) {
        this._images[src] = true;

        if (!_.includes(this._images, false)) {
            (this.props.complete || _.noop)();
        }
    }

    componentWillReceiveProps() {
        if (!this.props.async && _.includes(this._images, false)) {
            (this.props.before || _.noop)();
        }
    }

    _recursiveCloneChildren(children, index) {
        return React.Children.map(children, (child, i) => {
            var $idx = index || i;

            if (!_.isObject(child)) {
                return child;
            }

            var childProps = {};

            if (child.type === 'img') {

                childProps.ref = child.props.ref || $idx;
                childProps.onLoad = this._handleLoad.bind(this, child.props.src);
                childProps.onError = this._handleLoad.bind(this, child.props.src);

                this._images[child.props.src] = this._images[child.props.src] || false;
                $idx++;
            }

            childProps.children = this._recursiveCloneChildren(child.props.children, $idx);

            return React.cloneElement(child, childProps);
        }, this);
    }

    render() {
        return <div {...this.props}>
            {this._recursiveCloneChildren(this.props.children, 0)}
        </div>;
    }
}

export default Images;