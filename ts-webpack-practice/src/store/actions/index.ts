import * as constants from '../constant';
import { DataState, BalanceState, RootState } from '../types';
import { ThunkAction } from 'redux-thunk';


/**
 * _AC结尾的函数代表这是ActionCreator
 * _AC上面的interface是action的类型约束
 */



//数据加载的action，在componentDidMount的时候请求数据(被mockjs拦截)，将其加载到redux当中
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


//购买的action，在首页点击购买后触发，与充值的action共享同一个reducer
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


//点击购买后，将对应的item设置成已购买
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


//生成购买记录的action，与下面的生成充值记录的action共享同一个reducer
export interface CreatePurchaseRecord {
    type: constants.CREATE_PUCHASE_RECORD;
    [otherProps: string]: any;
}
export function setPurchaseRecord_AC(data: { price: number; name: string; date: string }): CreatePurchaseRecord {
    return {
        type: constants.CREATE_PUCHASE_RECORD,
        payload: data,
    }
}


//生成充值记录的action，与上面的生成购买记录的action共享同一个reducer
export interface CreateRechargeRecord {
    type: constants.CREATE_RECHARGE_RECORD;
    [otherProps: string]: any;
}
export function setRechargeRecord_AC(data:{account:number,date:string}):CreateRechargeRecord{
    return{
        type: constants.CREATE_RECHARGE_RECORD,
        payload: data,
    }
}


//充值的action，与购买的action共享同一个reducer
export interface Recharge{
    type: constants.RECHARGE;
    [otherProps: string]: any;
}
export function recharge_AC(account:number):Recharge{
    return{
        type: constants.RECHARGE,
        payload: account
    }
}



// action的联合类型
export type ActionTypes = LoadData | Purchase | SetIsPurchased | CreatePurchaseRecord | Recharge | CreateRechargeRecord;


//声明一个ThunkAction
export type ThunkActionType = ThunkAction<any, RootState, any, ActionTypes>;

//在点击了购买之后发出的thunkaction
export function buy_AC(price: number, index: number, name: string): ThunkActionType {
    const d: Date = new Date();
    const [year, month, day] = [d.getFullYear(), d.getMonth(), d.getDay()];
    const reg: RegExp = /(\d+)\:(\d+)\:(\d+)/;
    const a:string = Date();
    const res = a.match(reg);

    const str: string = `${year}年${month}月${day}日${res[1]}时${res[2]}分${res[3]}秒`;

    return function (dispatch) {
        dispatch(setIsPurchased_AC(index));
        dispatch(purchase_AC(price));
        dispatch(setPurchaseRecord_AC({
            price,
            name,
            date: str,
        }))
    }
}

//在点击了充值之后发出的thunkaction
export function handleRechage_AC(account:number):ThunkActionType{
    const a:string = Date();
    const reg: RegExp = /(\d+)\:(\d+)\:(\d+)/;
    const res = a.match(reg);

    const str: string = `${res[1]}时${res[2]}分${res[3]}秒`;

    return function(dispatch){
        dispatch(recharge_AC(account));
        dispatch(setRechargeRecord_AC({account,date:str}));
    }
}