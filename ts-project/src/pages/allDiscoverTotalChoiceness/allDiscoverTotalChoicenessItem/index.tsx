import React, { Component } from 'react'
import { DiscoverTotalChoicenessItemInt } from '@/pages/discover/discoverTotalChoiceness';

interface Props extends DiscoverTotalChoicenessItemInt{

}
class AllDiscoverTotalChoicenessItem extends Component<Props,any>{
    render(){
        const {title, avatar} = this.props;

        return(
            <div className="allDiscoverTotalChoicenessItem">
                
            </div>
        )
    }
}

export default AllDiscoverTotalChoicenessItem;