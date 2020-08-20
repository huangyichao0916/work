import * as constants from '../constant';
import {DataState,BalanceState} from '../types'

export interface LoadData{
    type: constants.LOADDATA;
    [otherProps:string]: any;
}
export function loadData_AC(data:DataState):LoadData{
    return{
        type: constants.LOADDATA,
        payload: data,
    }
}

export interface Purchase{
    type: constants.PURCHASE;
    [otherProps:string]: any;
}
export function purchase_AC(data:BalanceState):Purchase{
    return {
        type: constants.PURCHASE,
        payload: data,
    }
}

export interface SetIsPurchased{
    type: constants.SET_IS_PURCHASE,
    [otherProps:string]: any;
}
export function setIsPurchased_AC(data:number):SetIsPurchased{
    return{
        type:constants.SET_IS_PURCHASE,
        payload:data,
    }
}


export type ActionTypes = LoadData | Purchase | SetIsPurchased;