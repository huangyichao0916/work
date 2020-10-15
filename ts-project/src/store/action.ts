import '@/mock/course-lesson-data';
import * as constants from './constants'
import {ThunkAction} from 'redux-thunk'
import {RootState,MinePageDataItem,CourseLessonItem,
    PracticeCampItemInt,StudyItemInt,RechargeRecordItemInt} from './types'

/**
 * 充值明细相关的action 和 action creator
 */
export interface AddRecordToRechargeRecordAction {
    type: constants.ADD_RECORD_TO_RECHARGE_RECORD;
    [otherProps: string]: any;
}
export const addRecordToRechargeRecordActionCreator = (payload: number): AddRecordToRechargeRecordAction => {//payload为充值的数目
    let d = Date();
    let year: string = d.slice(11, 15) + d.slice(4, 7) + d.slice(8, 10);
    let time: string = d.slice(16, 25);
    let newPayload: RechargeRecordItemInt = {
        year,
        time,
        number: payload,
    }
    return {
        type: constants.ADD_RECORD_TO_RECHARGE_RECORD,
        payload: newPayload,
    }
}

/**
 * account相关的action creator
 */
export interface BuyLessonAction {
    type: constants.BUY_LESSON;
    [anyProps: string]: any;
}
export const buyLessonActionCreator = (payload: number): BuyLessonAction => {
    return {
        type: constants.BUY_LESSON,
        payload,
    }
}
export interface RechargeAction {
    type: constants.RECHARGE;
    [anyProps: string]: any;
}
export const rechargeActionCreator = (payload: number): RechargeAction => {//payload为充值的数目
    console.log(payload)
    return {
        type: constants.RECHARGE,
        payload,
    }
}


/**
 * mineItemDateSource相关的action creator
 */
export interface AddDataToMinePageAction {
    type: constants.ADD_DATA_TO_MINE_PAGE;
    [anyProps: string]: any;
}
export interface SetIsDotedToTrueAction {
    type: constants.SET_IS_DOTED_TO_TRUE;
    [anyProps: string]: any;
}
export interface SetIsDotedToFalseAction {
    type: constants.SET_IS_DOTED_TO_FALSE;
    [anyProps: string]: any;
}

export const addDataToMinePageActionCreator = (payload: Array<MinePageDataItem>): AddDataToMinePageAction => {//现在的payload是mine的datasource
    return {
        type: constants.ADD_DATA_TO_MINE_PAGE,
        payload,
    }
}
export const setIsDotedToTrueActionCreator = (payload: number): SetIsDotedToTrueAction => {//现在的payload是mineItem的key
    return {
        type: constants.SET_IS_DOTED_TO_TRUE,
        payload
    }
}
export const setIsDotedToFalseActionCreator = (payload: number): SetIsDotedToFalseAction => {//现在的payload是mineItem的key
    return {
        type: constants.SET_IS_DOTED_TO_FALSE,
        payload
    }
}


/**
 * studyItem相关的actioncreator 
 */
export interface AddPurchasedLessonsToStudyPageAction {
    type: constants.ADD_PURCHASED_LESSONS_TO_STUDY_PAGE;
    [anyProps: string]: any;
}
export const addPurchasedLessonsToStudyPageActionCreator = (payload: StudyItemInt): AddPurchasedLessonsToStudyPageAction => {
    return {
        type: constants.ADD_PURCHASED_LESSONS_TO_STUDY_PAGE,
        payload
    }
}

/**
 * 讲堂 -》 训练营相关的action 以及action creator
 */
export interface AddDataToPracticeCampAction {
    type: constants.ADD_DATA_TO_PRACTICE_CAMP;
    [anyProps: string]: any;
}
export const addDataToPracticeCampActionCreator = (payload: Array<PracticeCampItemInt>): AddDataToPracticeCampAction => {//现在的payload是数据
    return {
        type: constants.ADD_DATA_TO_PRACTICE_CAMP,
        payload,
    }
}
export interface SetPracticeCampToBePurchasedAction {
    type: constants.SET_PRACTICE_CAMP_TO_BE_PURCHASED;
    [anyProps: string]: any;
}
export const setPracticeCampToBePurchasedActionCreator = (payload: number): SetPracticeCampToBePurchasedAction => {//现在的payload是 id
    return {
        type: constants.SET_PRACTICE_CAMP_TO_BE_PURCHASED,
        payload
    }
}

/**
 * courseLessonItem相关的action creator
 */
export interface AddDataToCourseLessonAction{
    type: constants.ADD_DATA_TO_COURSE_LESSON,
    [anyProps: string]: any;
}
export const addDataToCourseLessonActionCreator = (payload:Array<CourseLessonItem>):AddDataToCourseLessonAction => {//现在的payload是数据
    return {
        type: constants.ADD_DATA_TO_COURSE_LESSON,
        payload
    }
}
export interface RefreshCourseLessonAction{
    type: constants.REFRESH_COURSE_LESSON,
    [anyProps: string]: any;
}
export const refreshCourseLessonActionCreator = (payload:Array<CourseLessonItem>):RefreshCourseLessonAction => {
    return {
        type: constants.REFRESH_COURSE_LESSON,
        payload
    }
}
export interface SetLessonToBePurchasedAction{
    type: constants.SET_LESSON_TO_BE_PURCHASED,
    [anyProps: string]: any;
}
export const setLessonToBePurchasedActionCreator = (payload:number):SetLessonToBePurchasedAction => {//现在的payload是索引
    return {
        type: constants.SET_LESSON_TO_BE_PURCHASED,
        payload
    }
}


//声明Action的联合类型
export type ActionType = AddRecordToRechargeRecordAction | BuyLessonAction | RechargeAction |
    AddDataToMinePageAction | SetIsDotedToTrueAction | SetIsDotedToFalseAction | AddPurchasedLessonsToStudyPageAction |
    AddDataToPracticeCampAction | SetPracticeCampToBePurchasedAction | AddDataToCourseLessonAction | 
    SetLessonToBePurchasedAction | RefreshCourseLessonAction

//声明ThunkAction
export type ThunkActionType = ThunkAction<any,RootState,any,ActionType>

// practiceCamp购买课程相关的action creator 
export const practiceCampBuyLessonActionCreator = (price:number, id:number, lesson:StudyItemInt):ThunkActionType => {
    return (dispatch) => {
        dispatch(buyLessonActionCreator(price));
        dispatch(setIsDotedToTrueActionCreator(0));
        dispatch(setIsDotedToTrueActionCreator(1));
        dispatch(setIsDotedToTrueActionCreator(2));
        dispatch(setPracticeCampToBePurchasedActionCreator(id));
        dispatch(addPurchasedLessonsToStudyPageActionCreator(lesson))
    }
}
export const rechargeAndRecordActionCreator = (howMuch:number):ThunkActionType => {
    return (dispatch) => {
        dispatch(rechargeActionCreator(howMuch));
        dispatch(addRecordToRechargeRecordActionCreator(howMuch))
        // console.log(getState().getIn(['rechargeRecordDataSource'].toJS()));
    }
}
export const lessonBuyLessonActionCreator = (price:number, index:number, lesson:StudyItemInt):ThunkActionType => {
    return (dispatch) => {
        dispatch(buyLessonActionCreator(price));
        dispatch(setIsDotedToTrueActionCreator(0));
        dispatch(setIsDotedToTrueActionCreator(1));
        dispatch(setIsDotedToTrueActionCreator(2));
        dispatch(addPurchasedLessonsToStudyPageActionCreator(lesson));
        dispatch(setLessonToBePurchasedActionCreator(index));
    }
}