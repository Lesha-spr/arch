import React, {Component, PropTypes} from 'react';
import counterpart from 'counterpart';
import LocaleActions from './../../actions/locale/LocaleActions.js';
import LocaleStore from './../../stores/locale/LocaleStore.js';

class Locale extends Component {
    constructor(props) {
        super(props);

        this.state = LocaleStore.getState();
    }

    componentDidMount() {
        LocaleStore.listen(this.onSelectLocale.bind(this));
    }

    componentWillUnmount() {
        LocaleStore.unlisten(this.onSelectLocale.bind(this));
    }

    onSelectLocale(state) {
        this.setState(state);
    }

    handleChange(event) {
        LocaleActions.selectLocale(event.target.value);
    }

    render() {
        return <select onChange={this.handleChange} defaultValue={this.state._locale.current} className='locale'>
            {this.state._locale.locale.map(locale => {
                return <option key={locale._id} value={locale.value}>{locale.title}</option>;
            })}
        </select>
    }
}

export default Locale;