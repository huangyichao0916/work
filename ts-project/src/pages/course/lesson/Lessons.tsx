import React, { useEffect, FC, useCallback, Dispatch } from 'react';
import './lesson.styl';
import axios from 'axios';
import '@/mock/course-lesson-data';

import StudyPath from '@/components/course/lesson/studyPath/StudyPath';
import CourseDirection from './courseDirection/CourseDirection';
import AllCourses from './allCourses/AllCourses';
import BScroll from '@/components/baseUI/MyBScroll'

import {
    addDataToCourseLessonActionCreator,
    refreshCourseLessonActionCreator,
    AddDataToCourseLessonAction,
    RefreshCourseLessonAction,
} from '@/store/action';
import { 
    CourseLessonItem,
 } from '@/store/types';
 

import { connect } from 'react-redux';



interface Props {
    addDataToCourseLesson: (...args: any[]) => any;
    refreshCourseLesson: (...args: any[]) => any;
    courseLessonDataSource: Array<CourseLessonItem>;
}

const Lesson: FC<Props> = (props) => {
    const { courseLessonDataSource, addDataToCourseLesson, refreshCourseLesson } = props;
    const Len: number = courseLessonDataSource.length;

    const loadCourseLesson = useCallback(
        (offset: number) => {
            axios.get(`/mock/course/lesson?offset=${offset}`)
                .then(res => {
                    if (res.data) {
                        addDataToCourseLesson(res.data)
                    }
                    else {
                        throw new Error("所有数据都展示完毕，无数据");
                    }
                })
                .catch(err => console.log(err))
        },
        [],
    )
    const reloadCourseLesson = useCallback(
        (offset: number) => {
            axios.get(`/mock/course/lesson?offset=${offset}`)
                .then(res => {
                    if (res.data) {
                        console.log(res.data)
                        refreshCourseLesson(res.data)
                    }
                    else {
                        throw new Error("所有数据都展示完毕，无数据");
                    }
                })
                .catch(err => console.log(err))
        },
        [],
    )

    useEffect(() => {
        if (Len > 0) {
            return;
        }
        console.log('请求courseLesson的数据');
        loadCourseLesson(0)
    }, [])


    return (
        <BScroll
            pullUp={() => loadCourseLesson(Len)}
            pullDown={() => reloadCourseLesson(Len)}
        >
            <div className="contentLesson">
                <StudyPath />
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
// const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>) => {
const mapDispatchToProps = (dispatch: Dispatch<AddDataToCourseLessonAction | RefreshCourseLessonAction>) => {
    return {
        addDataToCourseLesson: (payload: Array<CourseLessonItem>) => {
            dispatch(addDataToCourseLessonActionCreator(payload));
        },
        refreshCourseLesson: (payload: Array<CourseLessonItem>) => {
            dispatch(refreshCourseLessonActionCreator(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);