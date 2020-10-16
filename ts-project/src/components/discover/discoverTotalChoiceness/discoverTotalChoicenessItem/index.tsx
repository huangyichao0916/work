import React,{FC} from 'react';
import {DiscoverTotalChoicenessItemInt} from '@/pages/discover/discoverTotalChoiceness'
import './discoverTotalChoicenessItem.styl'

interface Props extends DiscoverTotalChoicenessItemInt{};

const DiscoverTotalChoicenessItem:FC<Props> = (props) => {
    const { 
        title,
        avatar,
    } = props;
    
    return (
        <div className="geek-university-item">
            <div className="geek-university-item-img">
                <img src={avatar} alt="" />
            </div>
            <div className="geek-university-item-title">{title}</div>
        </div>
    )
}

export default React.memo(DiscoverTotalChoicenessItem);