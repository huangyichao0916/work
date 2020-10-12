import React, { FC } from 'react';
import './allCourses.styl';
import AllCoursesItem from '@/components/course/lesson/allCoursesItem/AllCoursesItem';
import { CourseLessonItem } from '@/store/types'
import { connect } from 'react-redux'
import { lessonBuyLessonActionCreator, ActionType } from '@/store/action'
import { RootState } from '@/store/types'
import { ThunkDispatch } from 'redux-thunk';

export interface Payload {
    lessonName:string
    teacherName:string
    teacherDesc:string;
}
interface Props {
    courseLessonDataSource: Array<CourseLessonItem>
    handleBuyLesson: (price: number, id: number, payload:Payload) => void;
}
const AllCourses: FC<Props> = props => {
    const { courseLessonDataSource, handleBuyLesson } = props;
    // console.log(courseLessonDataSource);
    const items: Array<JSX.Element> = courseLessonDataSource.map((item: CourseLessonItem, index: number) => {
        const { img, title, desc, month, day, price, oldprice, isPurchased, name } = item;
        return (
            <AllCoursesItem
                img={img}
                key={index}
                id={index}
                lessonName={title}
                teacherName={name}
                teacherDesc={desc}
                month={month}
                day={day}
                price={price}
                oldprice={oldprice}
                isPurchased={isPurchased}

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
        handleBuyLesson: (price: number, id: number, payload:Payload) => {
            dispatch(lessonBuyLessonActionCreator(price, id, payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCourses);