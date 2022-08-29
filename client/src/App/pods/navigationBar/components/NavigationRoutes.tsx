import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {TestCases} from '../../testcases/components';
import {Dashboard} from '../../dashboard/components';
import NavigationBar from './NavigationBar';

import '../styles.css';

export function NavigationRoutes() {
    return (
        <div className={'routeContainer'}>
            <NavigationBar/>
            <div className={'routesContainer'}>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/testcases' element={<TestCases/>}/>
                </Routes>
            </div>
        </div>
    );
}

