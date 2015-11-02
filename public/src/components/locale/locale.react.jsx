import React, {Component, PropTypes} from 'react';
import counterpart from 'counterpart';
import LocaleStore from './../../stores/locale/LocaleStore.js';
import LocaleActions from './../../actions/locale/LocaleActions.js';
import _ from 'lodash';

class Locale extends Component {
    constructor(props) {
        super(props);
        this.state = LocaleStore.getAll();
    }

    componentDidMount() {
        LocaleStore.addSetListener(this.onSet.bind(this));
    }

    componentWillUnmount() {
        LocaleStore.removeSetListener(this.onSet.bind(this));
    }

    onSet() {
        this.setState(LocaleStore.getAll());
    }

    handleChange(event) {
        LocaleActions.setLocale(event.target.value);
    }

    render() {
        return <select onChange={this.handleChange} defaultValue={this.state.current} className='locale'>
            {this.state.locale.map(locale => {
                return <option key={locale._id} value={locale.value}>{locale.title}</option>;
            })}
        </select>
    }
}

export default Locale;