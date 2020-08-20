import React from 'react';
import './mainPage.styl';
import CommodityItem from '../../components/commodityItem';


const MainPage = (props:any) => {
    return(
        <div className="mainPage">
            <div className="header">
                所有商品
            </div>
            <CommodityItem price={10} name={'ivory'}/>
        </div>
    )
}

export default MainPage;