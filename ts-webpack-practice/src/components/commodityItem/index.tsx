import React,{FC} from 'react';
import './commodityItem.styl';

interface Props {
    name: string;
    price: number;
    isPurchased: boolean;
    index: number;
    handleBuy:(price:number,index:number,name:string) => void;
}

const CommodityItem:FC<Props> = (props) => {
    const { name, price, isPurchased, index, handleBuy } = props;
    return (
        <div className="commodityItem">
            <div className="name">
                {name}
            </div>
            <div className="price">
                ¥{price}
            </div>
            {
                !isPurchased &&
                <div className="button">
                    <button onClick={() => handleBuy(price, index, name)}>购买</button>
                </div>
            }
            {
                isPurchased &&
                <div className="isPurchased">
                    <button>已购买</button>
                </div>
            }
        </div>
    )
}

export default CommodityItem;