import React, {Component} from 'react';

import {NavigationRoutes} from './pods';
import '../index.css';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <NavigationRoutes/>
            </div>
        );
    }
}
