import {combineReducers} from 'redux';

import {applyDashboardReducer} from './pods/dashboard/reducers';

const rootReducer = combineReducers({data: applyDashboardReducer});

export default rootReducer;
