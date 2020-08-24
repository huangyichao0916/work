import rootReducer from './reducer';
import {createStore,Store,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {RootState} from './types';
import {ActionTypes} from './actions';

const store:Store<RootState,ActionTypes> = createStore(rootReducer,applyMiddleware(thunk));

export default store;