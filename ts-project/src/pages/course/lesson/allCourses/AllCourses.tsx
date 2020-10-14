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
    // console.log(courseLessonDataSource);
    const items: Array<JSX.Element> = courseLessonDataSource.map((item: CourseLessonItem, index: number) => {
        const {
            id,
            title,
            authorName,
            authorDesc,
            avatar,
            articleCount,
            totalPeopleLearn,
            priceMarket,
            priceSale,
            haveLearned
        } = item;
        return (
            <AllCoursesItem
                index={index}
                title={title}
                authorName={authorName}
                authorDesc={authorDesc}
                avatar={avatar}
                articleCount={articleCount}
                totalPeopleLearn={totalPeopleLearn}
                priceMarket={priceMarket}
                priceSale={priceSale}
                haveLearned={haveLearned}

                key={id}
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