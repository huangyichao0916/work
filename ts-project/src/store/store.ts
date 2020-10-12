import {combineReducers} from 'redux-immutable';
import {createStore,applyMiddleware,Reducer,Store} from 'redux';
import {RootState} from './types'
import {ActionType} from './action'
import reducers from './reducers';
import thunk from 'redux-thunk';

// import axios from 'axios';
// import { addDataToMinePageActionCreator } from '@/store/action';

const rootReducer:Reducer<RootState,ActionType> = combineReducers(reducers);

const store:Store<RootState,ActionType> = createStore(rootReducer,applyMiddleware(thunk));



export default store;