import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Header from './../header/header.react.jsx';
import Footer from './../footer/footer.react.jsx';
import Spinner from './../spinner/spinner.react.jsx';
import RootStore from './../../stores/root/RootStore.js';
import RootActions from './../../actions/root/RootActions.js';
import ProjectsStore from './../../stores/projects/ProjectsStore.js';
import ProjectsActions from './../../actions/projects/ProjectsActions.js';

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = _.assign(ProjectsStore.getAll(), RootStore.getRootState());
    }

    componentDidMount() {
        RootStore.addBeforeAsyncListener(this.onBeforeAsync.bind(this));
        RootStore.addCompleteAsyncListener(this.onCompleteAsync.bind(this));
        ProjectsStore.addGetListener(this.onGet.bind(this));
        ProjectsActions.get();
        RootActions.asyncBefore(this.state.async);
    }

    componentWillUnmount() {
        RootStore.removeBeforeAsyncListener(this.onBeforeAsync.bind(this));
        RootStore.removeCompleteAsyncListener(this.onCompleteAsync.bind(this));
        ProjectsStore.removeGetListener(this.onGet.bind(this));
    }

    onBeforeAsync() {
        this.setState({
            async: RootStore.getRootState().async
        });
    }

    onCompleteAsync() {
        this.setState({
            async: RootStore.getRootState().async
        });
    }

    onGet() {
        this.setState(ProjectsStore.getAll());
    }

    render() {
        let className = classNames({
            'root': true,
            'root_state_loading': this.state.async
        });
        let spinner = this.state.async ? <Spinner/> : '';

        return <div className='layout'>
            {spinner}
            <div className={className}>
                <Header/>
                <main className='root__main'>
                    {React.cloneElement(this.props.children, {root: this.state})}
                </main>
                <Footer/>
            </div>
        </div>;
    }
}

export default Root;