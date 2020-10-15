import {List} from 'immutable'


//Balance
export type BalanceState = number;

//MinePage
export interface MinePageDataItem {
    icon: string;
    id: number;
    isBalanceShow: number;
    isDotShow: number;
    linkTo: string;
    title: string;
}
export type MineItemState = List<MinePageDataItem>

//CourseLesson
export interface CourseLessonItem {
    id:number;
    title:string;
    authorName:string;
    authorDesc:string;
    avatar:string;
    articleCount:number;
    totalPeopleLearn:number;
    priceMarket:number;
    priceSale:number;
    haveLearned:boolean;
}
export type CourseLessonItemState = List<CourseLessonItem>

//PracticeCamp
export interface PracticeCampItemInt {
    id:number;
    title:string;
    authorName:string;
    authorDesc:string;
    avatar:string;
    priceMarket:number;
    priceSale:number;
    haveLearned:boolean;
    beginDate:string;
}
export type PracticeCampItemState = List<PracticeCampItemState>

//StudyItem
export interface StudyItemInt {
    title: string;
    authorDesc: string;
    authorName: string;
}
export type StudyItemState = List<StudyItemInt>

//RechargeRecord
export interface RechargeRecordItemInt{
    year:string;
    time:string;
    number:number;
}
export type RechargeRecordState = List<RechargeRecordItemInt>


export type RootState = {
    account:BalanceState,//账户余额 Number
    mineItemDateSource:MineItemState,//我的 页面的每一项的数据 
    courseLessonDataSource:CourseLessonItemState,//讲堂的课程页面下面的数据源 Array
    practiceCampDataSource:PracticeCampItemState,//讲堂的训练营下面的数据源  Array
    studyItemDatatSource:StudyItemState, // 我的学习下面的数据源
    rechargeRecordDataSource:RechargeRecordState,
}