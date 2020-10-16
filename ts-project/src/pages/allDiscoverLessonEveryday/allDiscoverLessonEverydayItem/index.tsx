import React, { Component } from 'react'
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';

interface Props extends DiscoverLessonEverydayItemInt{

}
class AllDiscoverLessonEverydayItem extends Component<Props,any>{
    render(){
        const {title, subtitle, avatar} = this.props;

        return(
            <div className="allDiscoverLessonEverydayItem">

            </div>
        )
    }
}

export default AllDiscoverLessonEverydayItem;