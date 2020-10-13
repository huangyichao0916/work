import React,{FC} from 'react';
import './courseDirectionItem.styl';

interface Props{
    title:string;
    myClassname:string;
}
const CourseDirectionItem:FC<Props> = props => {
    const {title,myClassname} = props;
    return (
        <div className={myClassname}>
            {title}
        </div>
    )
}

export default CourseDirectionItem;