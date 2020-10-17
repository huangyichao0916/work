import React, { Component } from 'react'
import { DiscoverTotalChoicenessItemInt } from '@/pages/discover/discoverTotalChoiceness';
import MyButton from '@/baseUI/myButton';
import './allDiscoverTotalChoicenessItem.styl';

interface Props extends DiscoverTotalChoicenessItemInt{

}
class AllDiscoverTotalChoicenessItem extends Component<Props,any>{
    render(){
        const {title, avatar} = this.props;

        return(
            <div className="allDiscoverTotalChoicenessItem">
                <div className="left">
                    <img src={avatar} alt=""/>
                </div>
                <div className="right">
                    <div className="title">
                        {title}
                    </div>
                </div>
                <MyButton clickable={true}>查看</MyButton>
            </div>
        )
    }
}

export default AllDiscoverTotalChoicenessItem;