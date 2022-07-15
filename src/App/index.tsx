import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Dashboard} from './pods';
import '../index.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Dashboard/>
            </div>
        );
    }
}

export default connect(null, null)(App);
