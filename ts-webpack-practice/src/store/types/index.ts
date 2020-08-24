/**
 * 本项目使用了combineReducers
 * 这个文件声明了各个子ruducer的state的类型
 * 子reducer有3个，分别是：余额，首页的数据，充值以及购买记录
 */


//余额
export type BalanceState = number;


//首页数据(数组)
interface Data {
    name: string;
    price: number;
    isPurchased: boolean;
}
export type DataState = Array<Data>;


//充值以及购买记录(数组)
interface RecordItem{
    price?: number;
    name?: string;
    date: string;
    account?: number;
}
export type RecordState  = Array<RecordItem>;



//根reducer的state的类型
export type RootState = {
    balance: BalanceState;
    data: DataState;
    record: RecordState;
}