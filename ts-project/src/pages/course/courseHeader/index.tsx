import React, { FC } from 'react';
import './courseHeader.styl';
import {NavLink} from 'react-router-dom'

const CourseHeader:FC<any> = () => {
    return (
        <div className="header">
            <div className="headerItem">
                <NavLink exact to="/home/course/lesson" activeClassName="selected">课程</NavLink>
            </div>
            <div className="headerItem">
                <NavLink to="/home/course/practiceCamp" activeClassName="selected">训练营</NavLink>
            </div>
            <div className="headerItem">
                <NavLink to="/home/course/lessonEveryday" activeClassName="selected">每日一课</NavLink>
            </div>
        </div>
    )
}

export default React.memo(CourseHeader);