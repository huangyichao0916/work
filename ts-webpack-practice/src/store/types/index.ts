export type BalanceState = number;

interface Data {
    name: string;
    price: number;
    isPurchased: boolean;
}
export type DataState = Array<Data>;


export type RootState = {
    balance: BalanceState;
    data: DataState;
}