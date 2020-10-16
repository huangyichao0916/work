import React,{FC} from 'react';
import './discoverLessonEverydayItem.styl';
import {DiscoverLessonEverydayItemInt} from '..'

interface Props extends DiscoverLessonEverydayItemInt{};

const GeekUniversityItem:FC<Props> = (props) => {
    const { 
        title,
        subtitle,
        avatar,
    } = props;
    
    return (
        <div className="geek-university-item">
            <div className="geek-university-item-img">
                <img src={avatar} alt="" />
            </div>
            <div className="geek-university-item-title">{title}</div>
            <div className="geek-university-item-desc">{subtitle}</div>
        </div>
    )
}

export default React.memo(GeekUniversityItem);