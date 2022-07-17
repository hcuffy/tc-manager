import React from 'react';
import {Routes, Route} from 'react-router-dom';

import NavigationBar from './NavigationBar';
import {TestCases} from '../../testcases/components';
import {Dashboard} from '../../dashboard/components';

export function NavigationRoutes() {
    return (
        <div>
            <NavigationBar/>
            <div >
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/testcases' element={<TestCases/>}/>
                </Routes>
            </div>
        </div>
    );
}

