import React, {Component, PropTypes} from 'react';
import Header from './../header/header.rect.jsx';
import Footer from './../footer/footer.rect.jsx';

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='container'>
            <Header/>
            Root
            {this.props.children}
            <Footer/>
        </div>;
    }
}

export default Root;