import React, { FC } from 'react';
import './allCourses.styl';
import AllCoursesItem from '@/components/course/lesson/allCoursesItem/AllCoursesItem';

import { 
    CourseLessonItem,
    RootState,
    StudyItemInt,
 } from '@/store/types'
import { lessonBuyLessonActionCreator, ActionType } from '@/store/action'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';

interface Props {
    courseLessonDataSource: Array<CourseLessonItem>
    handleBuyLesson: (price: number, index: number, payload: StudyItemInt) => void;
}
const AllCourses: FC<Props> = props => {
    const { courseLessonDataSource, handleBuyLesson } = props;
    const items: Array<JSX.Element> = courseLessonDataSource.map((item: CourseLessonItem, index: number) => {
        return (
            <AllCoursesItem
                {...item}

                index={index}
                key={item.id}
                handleBuyLesson={handleBuyLesson}
            />
        )
    })
    return (
        <div className="allCourses">
            <div className="allCoursesTop">
                全部课程
            </div>
            <div className="allCoursesNavBar">
                <div className="left">
                    课程形式
                </div>
                <div className="middle">
                    订阅状态
                </div>
                <div className="right">
                    上新
                </div>
            </div>
            <div className="allCoursesItemWrapper">
                {
                    items
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>) => {
    return {
        handleBuyLesson: (price: number, index: number, payload: StudyItemInt) => {
            dispatch(lessonBuyLessonActionCreator(price, index, payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCourses);