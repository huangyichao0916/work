import React, { FC } from 'react';
import './studyItem.styl'

interface Props{
    title:string;
    authorName:string;
    authorDesc:string;
}
const StudyItem:FC<Props> = props => {
    const { title, authorName, authorDesc } = props;
    return (
        <div className="study-item">
            <div className="study-item-title">{title}</div>
            <div className="study-item-teacher-name">{authorName}</div>
            <div className="study-item-teacher-desc">{authorDesc}</div>
        </div>
    )
}
export default StudyItem;