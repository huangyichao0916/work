import React, { Component } from 'react';
import './course.styl';
import CourseHeader from './courseHeader';
import {renderRoutes} from 'react-router-config';

interface Route{
    routes:Array<any>;
    [otherProps:string]:any;
}
interface Props{
    route:Route;
    history:any;
    location:any;
    match:any;
    [otherProps:string]:any;
}
class Course extends Component<Props> {
    render() { 
        return ( 
            <div className="course">
                <CourseHeader />
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Course;