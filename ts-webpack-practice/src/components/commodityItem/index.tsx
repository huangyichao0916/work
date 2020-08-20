import React from 'react';
import './commodityItem.styl';

interface Props{
    name: string;
    price: number;
}

const CommodityItem = (props:Props) => {
    const {name,price} = props;
    return(
        <div className="commodityItem">
            <div className="name">
                {name}
            </div>
            <div className="price">
                ¥{price}
            </div>
            <div className="button">
                <button>购买</button>
            </div>
        </div>
    )
}

export default CommodityItem;