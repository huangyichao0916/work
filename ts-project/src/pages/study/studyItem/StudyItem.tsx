import React, { FC } from 'react';
import './studyItem.styl'

interface Props{
    lessonName:string;
    teacherName:string;
    teacherDesc:string;
}
const StudyItem:FC<Props> = props => {
    const { lessonName, teacherName, teacherDesc } = props;
    return (
        <div className="study-item">
            <div className="study-item-title">{lessonName}</div>
            <div className="study-item-teacher-name">{teacherName}</div>
            <div className="study-item-teacher-desc">{teacherDesc}</div>
        </div>
    )
}
export default StudyItem;