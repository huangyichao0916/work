import ListReducer from './lists';
import {createStore,combineReducers} from 'redux';

const rootReducer = combineReducers({
    lists:ListReducer,
})

export default createStore(rootReducer);