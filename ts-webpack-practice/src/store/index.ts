import rootReducer from './reducer';
import {createStore,Store} from 'redux';

const store:Store = createStore(rootReducer);

export default store;