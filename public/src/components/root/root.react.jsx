import React, {Component, PropTypes} from 'react';
import Header from './../header/header.react.jsx';
import Footer from './../footer/footer.react.jsx';
import ProjectsStore from './../../stores/projects/ProjectsStore.js';
import ProjectsActions from './../../actions/projects/ProjectsActions.js';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = ProjectsStore.getAll();
    }

    componentDidMount() {
        ProjectsStore.addGetListener(this.onGet.bind(this));
        ProjectsActions.get();
    }

    componentWillUnmount() {
        ProjectsStore.removeGetListener(this.onGet.bind(this));
    }

    onGet() {
        this.setState(ProjectsStore.getAll());
    }

    render() {
        return <main className='main'>
            <Header/>
            {React.cloneElement(this.props.children, {root: this.state})}
            <Footer/>
        </main>;
    }
}

export default Root;