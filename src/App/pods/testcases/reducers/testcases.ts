import _ from 'lodash';
import {GET_TEST_CASES} from '../constants';

const initialLoadState = {
    testCases: []
};

export const applyTestCaseReducer = (state = initialLoadState, {type, payload}) => {
    const newState = _.merge({}, state, payload);

    const actionHandlers = {
        [GET_TEST_CASES]: newState
    };

    return actionHandlers[type] || state;
};
