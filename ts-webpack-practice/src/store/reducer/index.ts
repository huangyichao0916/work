import { BalanceState, DataState,RecordState, RootState } from '../types';
import { ActionTypes } from '../actions';
import * as constants from '../constant';
import { Reducer, combineReducers, ReducersMapObject } from 'redux';

let defaultBalanceState: BalanceState = 1000;
export const balanceReducer: Reducer<BalanceState, ActionTypes> = (state = defaultBalanceState, action) => {
    const { payload, type } = action;
    switch (type) {
        case constants.PURCHASE:
            return state - payload;

        default:
            return state;
    }
}

let defaultDataState: DataState = [];
export const dataReducer: Reducer<DataState, ActionTypes> = (state = defaultDataState, action) => {
    const { payload, type } = action;
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

let recordState:RecordState = [];
export const recordReducer:Reducer<RecordState,ActionTypes> = (state = recordState,action) => {
    const {payload,type} = action;
    switch (type) {
        case constants.CREATE_PUCHASE_RECORD:
            let newState = [...state];
            newState.push(payload);
            return newState;
    
        default:
            return state;
    }
}

const reducers: ReducersMapObject<RootState, ActionTypes> = {
    balance: balanceReducer,
    data: dataReducer,
    record: recordReducer,
}

const rootReducer: Reducer<RootState, ActionTypes> = combineReducers(reducers);

export default rootReducer;