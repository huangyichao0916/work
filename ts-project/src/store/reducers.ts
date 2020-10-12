import {List} from 'immutable';
import * as constants from './constants'
import {BalanceState,MineItemState,CourseLessonItemState
    ,PracticeCampItemState,StudyItemState,RechargeRecordState, RootState} from './types'
import {Reducer,ReducersMapObject} from 'redux'
import {ActionType} from './action'

let defaultBalanceState:BalanceState = 10000;
const balanceReducer:Reducer<BalanceState,ActionType> = (state = defaultBalanceState,action) => {
    const {type,payload} = action;
    switch (type) {
        case constants.BUY_LESSON:
            return state - payload;
        case constants.RECHARGE:
            return state + payload;
        default:
            return state;
    }
}

const defaultMineItemState:MineItemState = List([]);
const mineItemReducer:Reducer<MineItemState,ActionType> = (state = defaultMineItemState,action) => {
    const {type,payload} = action;
    switch (type) {
        case constants.ADD_DATA_TO_MINE_PAGE:
            return List(payload);
        case constants.SET_IS_DOTED_TO_TRUE:
            return state.setIn([payload,'isDotShow'],1);
        case constants.SET_IS_DOTED_TO_FALSE:
            return state.setIn([payload,'isDotShow'],0);
        default:
            return state;
    }
}

const defaultCourseLessonItemState:CourseLessonItemState = List([]);
const courseLessonItemReducer:Reducer<CourseLessonItemState,ActionType> = (state = defaultCourseLessonItemState , action) => {
    const {type,payload} = action;
    switch (type) {
        case constants.ADD_DATA_TO_COURSE_LESSON:
            return state.push(...payload);
        case constants.SET_LESSON_TO_BE_PURCHASED:
            return state.setIn([payload,'isPurchased'],true);
        default:
            return state;
    }
}

const defaultPracticeCampItemState:PracticeCampItemState = List([]);
const practiceCampItemReducer:Reducer<PracticeCampItemState,ActionType> = (state = defaultPracticeCampItemState,action) => {
    const {type , payload} = action;
    switch (type) {
        case constants.ADD_DATA_TO_PRACTICE_CAMP:
            return List(payload);
        case constants.SET_PRACTICE_CAMP_TO_BE_PURCHASED:
            return state.setIn([payload,'isPurchased'],true)
        default:
            return state;
    }
}

const defaultStudyItemState:StudyItemState = List([]);
const studyItemReducer:Reducer<StudyItemState,ActionType> = (state = defaultStudyItemState, action) => {
    const {type, payload} = action;
    switch (type) {
        case constants.ADD_PURCHASED_LESSONS_TO_STUDY_PAGE:
            return state.push(payload);
        default:
            return state;
    }
}

const defaultRechargeRecordState:RechargeRecordState = List([]);
const rechargeRecordReducer:Reducer<RechargeRecordState,ActionType> = (state = defaultRechargeRecordState , action) => {
    const {type,payload} = action;
    switch (type) {
        case constants.ADD_RECORD_TO_RECHARGE_RECORD:
            return state.unshift(payload);
        default:
            return state;
    }
}

const reducers:ReducersMapObject<RootState,ActionType> = {
    account:balanceReducer,//账户余额 Number
    mineItemDateSource:mineItemReducer,//我的 页面的每一项的数据 Array
    courseLessonDataSource:courseLessonItemReducer,//讲堂的课程页面下面的数据源 Array
    practiceCampDataSource:practiceCampItemReducer,//讲堂的训练营下面的数据源  Array
    studyItemDatatSource:studyItemReducer, // 我的学习下面的数据源
    rechargeRecordDataSource:rechargeRecordReducer,//充值明细的数据源  Array
}

export default reducers;