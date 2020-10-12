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
    day: number;
    desc: string;
    img: string;
    isPurchased: boolean;
    month: number;
    name: string;
    oldprice: number;
    price: number;
    title: string;
    type: string;
}
export type CourseLessonItemState = List<CourseLessonItem>

//PracticeCamp
export interface PracticeCampItemInt {
    day: number;
    desc: string;
    id: number;
    img: string;
    isPurchased: boolean;
    itemType: string;
    month: number;
    name: string;
    oldprice: number;
    price: number;
    title: string;
}
export type PracticeCampItemState = List<PracticeCampItemState>

//StudyItem
export interface StudyItem {
    lessonName: string;
    teacherDesc: string;
    teacherName: string;
}
export type StudyItemState = List<StudyItem>

//RechargeRecord
export interface RechargeRecordItem{
    year:string;
    time:string;
    number:number;
}
export type RechargeRecordState = List<RechargeRecordItem>


export type RootState = {
    account:BalanceState,//账户余额 Number
    mineItemDateSource:MineItemState,//我的 页面的每一项的数据 
    courseLessonDataSource:CourseLessonItemState,//讲堂的课程页面下面的数据源 Array
    practiceCampDataSource:PracticeCampItemState,//讲堂的训练营下面的数据源  Array
    studyItemDatatSource:StudyItemState, // 我的学习下面的数据源
    rechargeRecordDataSource:RechargeRecordState,
}