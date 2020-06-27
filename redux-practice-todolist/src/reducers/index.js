import ListReducer from './lists';
import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';

const rootReducer = combineReducers({
    lists:ListReducer,
})


export default createStore(rootReducer);