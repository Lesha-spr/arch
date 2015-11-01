import React, {Component, PropTypes} from 'react';
import Header from './../header/header.react.jsx';
import Footer from './../footer/footer.react.jsx';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>;
    }
}

export default Root;