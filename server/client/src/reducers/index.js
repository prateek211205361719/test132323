

import authReducer from './authreducer';
import { combineReducers } from 'redux';

var reducers = combineReducers({
    auth : authReducer,
});

export default reducers;
