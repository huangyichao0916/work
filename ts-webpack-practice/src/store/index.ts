import rootReducer from './reducer';
import {createStore,Store,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store:Store = createStore(rootReducer,applyMiddleware(thunk));

export default store;