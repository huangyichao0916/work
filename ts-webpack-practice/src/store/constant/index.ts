/**
 * 这个文件记录着所有的actiontype
 * 用const、type模式让项目更容易维护
 */

export const LOADDATA = 'LOADDATA';
export type LOADDATA = typeof LOADDATA;

export const PURCHASE = 'PURCHASE';
export type PURCHASE = typeof PURCHASE;

export const SET_IS_PURCHASE = 'SET_IS_PURCHASE';
export type SET_IS_PURCHASE = typeof SET_IS_PURCHASE;

export const CREATE_PUCHASE_RECORD = 'CREATE_PUCHASE_RECORD';
export type CREATE_PUCHASE_RECORD = typeof CREATE_PUCHASE_RECORD;

export const RECHARGE = 'RECHARGE';
export type RECHARGE = typeof RECHARGE;

export const CREATE_RECHARGE_RECORD = 'CREATE_RECHARGE_RECORD';
export type CREATE_RECHARGE_RECORD = 'CREATE_RECHARGE_RECORD';