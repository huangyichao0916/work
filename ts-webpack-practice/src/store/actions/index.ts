import * as constants from '../constant';
import { DataState, BalanceState, RootState} from '../types'
import {ThunkAction} from 'redux-thunk'

export interface LoadData {
    type: constants.LOADDATA;
    [otherProps: string]: any;
}
export function loadData_AC(data: DataState): LoadData {
    return {
        type: constants.LOADDATA,
        payload: data,
    }
}

export interface Purchase {
    type: constants.PURCHASE;
    [otherProps: string]: any;
}
export function purchase_AC(data: BalanceState): Purchase {
    return {
        type: constants.PURCHASE,
        payload: data,
    }
}

export interface SetIsPurchased {
    type: constants.SET_IS_PURCHASE;
    [otherProps: string]: any;
}
export function setIsPurchased_AC(data: number): SetIsPurchased {
    return {
        type: constants.SET_IS_PURCHASE,
        payload: data,
    }
}

export interface CreatePurchaseRecord{
    type: constants.CREATE_PUCHASE_RECORD;
    [otherProps: string]: any;
}
export function setPurchaseRecord_AC(data:object):CreatePurchaseRecord{
    return{
        type: constants.CREATE_PUCHASE_RECORD,
        payload: data,
    }
}


// action的联合类型
export type ActionTypes = LoadData | Purchase | SetIsPurchased;


export type Buy = ThunkAction<any,RootState,any,ActionTypes>;
export function buy_AC(price:number,index:number):Buy{
    const d:Date = new Date();
    const [year,month,day] = [d.getFullYear(),d.getMonth(),d.getDay()];
    const str:string = `${year}年${month}月${day}日`;

    return function(dispatch){
        dispatch(setIsPurchased_AC(index));
        dispatch(purchase_AC(price));
    }
}