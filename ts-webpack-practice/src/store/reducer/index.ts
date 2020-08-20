import {BalanceState,DataState,RootState} from '../types';
import {ActionTypes} from '../actions';
import * as constants from '../constant';
import {Reducer,combineReducers,ReducersMapObject} from 'redux';

let defaultBalanceState:BalanceState = 1000;
export const balanceReducer:Reducer = (state:BalanceState = defaultBalanceState,action:ActionTypes):BalanceState =>{
    const {payload,type} = action;
    switch (type) {
        case constants.PURCHASE:
            return state - payload;
    
        default:
            return state;
    }
}

let defaultDataState:DataState = [];
export const dataReducer:Reducer = (state:DataState = defaultDataState,action:ActionTypes):DataState => {
    const{payload,type} = action;
    switch (type) {
        case constants.LOADDATA:
            return payload;
        
        case constants.SET_IS_PURCHASE:
            let newState = [...state];
            newState[payload].isPurchased = !newState[payload].isPurchased;
            return newState;

        default:
            return state;
    }
}

const reducers:ReducersMapObject<RootState,ActionTypes> = {
    balance: balanceReducer,
    data: dataReducer,
}

const rootReducer:Reducer<RootState,ActionTypes> = combineReducers(reducers);

export default rootReducer;