import React, { Component } from 'react';
import './course.styl';
import Header from './header/Header';
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
                <Header />
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Course;