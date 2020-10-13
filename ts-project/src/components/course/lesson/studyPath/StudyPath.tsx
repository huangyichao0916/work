import React, { Component } from 'react';
import './studyPath.styl';
import StudyPathItem from './studyPathItem/StudyPathItem';
import { CourseLessonItem } from '../../../../store/types'

interface Props{
    courseLessonDataSource: CourseLessonItem[]
}
interface StudyPathItemData{
    [anyProps:string]:number;
}
class StudyPath extends Component<Props> {
    render() {
        // console.log('studypatch重新渲染');
        const { courseLessonDataSource } = this.props;
        const studyPathItemData:StudyPathItemData = courseLessonDataSource.reduce((pre, cur) => {
            let type = cur.type;
            if (!pre[type]) {
                pre[type] = 1;
            } else {
                pre[type]++;
            }
            return pre;
        }, {})

        // console.log(studyPathItemData);//object
        const finalStudyPathItem:Array<JSX.Element> = Object.keys(studyPathItemData).map((i,index) => {
            return (
                <StudyPathItem key={index} type={i} total={studyPathItemData[i]}/>
            )
        })
        return (
            <div className="studyPath">
                <div className="top">
                    <div className="left">
                        学习路径
                    </div>
                    <div className="right">
                        查看全部
                    </div>
                </div>
                <div className="studyPathItemWrapper">
                    <div className="content">
                        {finalStudyPathItem}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyPath;