import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {applyDashboardReducer} from './pods/dashboard/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    data:   applyDashboardReducer
});

