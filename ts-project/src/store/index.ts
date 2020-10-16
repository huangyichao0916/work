import {combineReducers} from 'redux-immutable';
import {createStore,applyMiddleware,Reducer,Store} from 'redux';
import {RootState} from './types'
import {ActionType} from './action'
import reducers from './reducers';
import thunk from 'redux-thunk';


const rootReducer:Reducer<RootState,ActionType> = combineReducers<RootState,ActionType>(reducers);

const store:Store<RootState,ActionType> = createStore(rootReducer,applyMiddleware(thunk));



export default store;