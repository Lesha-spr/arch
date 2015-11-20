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

        this.state = _.assign(ProjectsStore.getState(), RootStore.getState());
    }

    componentDidMount() {
        RootStore.listen(this.onAsync.bind(this));
        ProjectsStore.listen(this.onGet.bind(this));

        ProjectsActions.fetch();
        RootActions.asyncBefore(this.state.async);
    }

    componentWillUnmount() {
        RootStore.unlisten(this.onAsync.bind(this));
        ProjectsStore.unlisten(this.onGet.bind(this));
    }

    onAsync(state) {
        this.setState(state);
    }

    onGet(state) {
        this.setState(state);
    }

    render() {
        let className = classNames({
            'root': true,
            'root_state_loading': this.state._root.async
        });
        let spinner = this.state._root.async ? <Spinner/> : '';

        return <div className='layout'>
            {spinner}
            <div className={className}>
                <Header/>
                <main className='root__main'>
                    {React.cloneElement(this.props.children, this.state)}
                </main>
                <Footer/>
            </div>
        </div>;
    }
}

export default Root;