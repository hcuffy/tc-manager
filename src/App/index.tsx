import React, {Component} from 'react';

import {Dashboard} from './pods';
import '../index.css';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Dashboard/>
            </div>
        );
    }
}
