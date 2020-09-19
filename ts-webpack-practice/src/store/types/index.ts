export type BalanceState = number;

interface Data {
    name: string;
    price: number;
    isPurchased: boolean;
}
export type DataState = Array<Data>;

interface RecordItem{
    price: number;
    name: string;
    date: string;
}
export type RecordState  = Array<RecordItem>;


export type RootState = {
    balance: BalanceState;
    data: DataState;
    record: RecordState;
}