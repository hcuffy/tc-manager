import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {applyDashboardReducer} from './pods/dashboard/reducers';
import {applyTestCaseReducer} from './pods/testcases/reducers';

export default history => combineReducers({
    router:        connectRouter(history),
    dashboardData: applyDashboardReducer,
    testCaseData:  applyTestCaseReducer
});

