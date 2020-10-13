import React, { useEffect, FC } from 'react';
import StudyPath from '@/components/course/lesson/studyPath/StudyPath';
import './lesson.styl';
import axios from 'axios';
import '@/mock/course-lesson-data';
import { connect } from 'react-redux';
import { addDataToCourseLessonActionCreator, courseLessonPullDownActionCreator } from '@/store/action';
import CourseDirection from './courseDirection/CourseDirection';
import AllCourses from './allCourses/AllCourses';
import { CourseLessonItem } from '@/store/types'
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/store/types'
import { ActionType } from '@/store/action'

import BScroll from '@/components/baseUI/MyBScroll'


interface Props {
    addDataToCourseLesson: Function;
    handlePullUp:(...args: any[]) => any;
    courseLessonDataSource: Array<CourseLessonItem>
}

const Lesson: FC<Props> = (props) => {
    const { courseLessonDataSource, handlePullUp, addDataToCourseLesson, } = props;

    function loadCourseLesson():void {
        axios.get('/mock/course/lesson')
            .then(res => res.data.courses)
            .then(res => addDataToCourseLesson(res));
    }

    useEffect(() => {
        if (courseLessonDataSource.length > 0) {
            return;
        }
        console.log('请求courseLesson的数据');
        loadCourseLesson()
    }, [])


    return (
        <BScroll
            pullUp={handlePullUp}
            pullDown={loadCourseLesson}
        >
            <div className="content">
                <StudyPath courseLessonDataSource={courseLessonDataSource} />
                <CourseDirection />
                <AllCourses courseLessonDataSource={courseLessonDataSource} />
            </div>
        </BScroll>
    );
}

const mapStateToProps = state => {
    return {
        courseLessonDataSource: state.getIn(['courseLessonDataSource']).toJS(),
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>) => {
    return {
        addDataToCourseLesson: (payload: Array<CourseLessonItem>) => {
            dispatch(addDataToCourseLessonActionCreator(payload));
        },
        handlePullUp: () => {
            // console.log('123');
            dispatch(courseLessonPullDownActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);