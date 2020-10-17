import React, { Component } from 'react'
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';
import './allDiscoverLessonEverydayItem.styl';
import MyButton from '@/baseUI/myButton';

interface Props extends DiscoverLessonEverydayItemInt{

}
class AllDiscoverLessonEverydayItem extends Component<Props,any>{
    render(){
        const {title, subtitle, avatar} = this.props;
        console.log(avatar)
        return(
            <div className="allDiscoverLessonEverydayItem">
                <div className="left">
                    <img src={avatar} alt=""/>
                </div>
                <div className="right">
                    <div className="title">
                        {title}
                    </div>
                    <div className="subtitle">
                        {subtitle}
                    </div>
                </div>
                <MyButton clickable={true}>试看</MyButton>
            </div>
        )
    }
}

export default AllDiscoverLessonEverydayItem;