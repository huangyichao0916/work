import React, { Component } from 'react';
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
import BetterScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'


interface Props {
    addDataToCourseLesson: Function;
    handlePullDown: Function;
    courseLessonDataSource: Array<CourseLessonItem>
}
class Lesson extends Component<Props> {
    componentDidMount() {
        BetterScroll.use(Pullup)
        const bs = new BetterScroll('.lesson', {
            scrollY: true,
            click:true,
            scrollX: false,
            pullUpLoad:true,
        })
        bs.on('pullingUp',() => {
            console.log(`拉到底部了，再次请求数据，现在有${this.props.courseLessonDataSource.length + 10}条数据`)
            this.props.handlePullDown();
        })

        if (this.props.courseLessonDataSource.length > 0) {
            // console.log('courseLessonDataSource已经有数据，所以阻断了axios请求');
            return;
        }
        console.log('请求courseLesson的数据');
        axios.get('/mock/course/lesson')
            .then(res => res.data.courses)
            .then(res => this.props.addDataToCourseLesson(res));
    }
    render() {
        // console.log('lesson重新渲染');
        const { courseLessonDataSource } = this.props;
        return (
            <div className="lesson">
                {/* <Scroll
                    direction={'vertical'}
                    pullUp={handlePullDown}
                    onScroll={forceCheck}
                > */}
                    <div className="content">
                        <StudyPath courseLessonDataSource={courseLessonDataSource} />
                        <CourseDirection />
                        <AllCourses courseLessonDataSource={courseLessonDataSource} />
                    </div>
                {/* </Scroll> */}
            </div>
        );
    }
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
        handlePullDown: () => {
            // console.log('123');
            dispatch(courseLessonPullDownActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);