import React, { useEffect,FC } from 'react';
import './mainPage.styl';
import CommodityItem from '../../components/commodityItem';
import axios from 'axios';
import '../../mock';
import { connect } from 'react-redux';
import { RootState, DataState } from '../../store/types';
import { ActionTypes, loadData_AC, buy_AC, SetIsPurchased} from '../../store/actions';
import {ThunkDispatch} from 'redux-thunk'

interface Props {
    commodityData: DataState;
    loadData: (data: DataState) => void;
    handleBuy:(price:number,index:number,name:string) => void;
}

const MainPage:FC<Props> = (props) => {
    const { loadData, commodityData, handleBuy } = props;
    useEffect(() => {
        //在组件挂在的时候发出axios请求，将数据加载到redux中
        if (commodityData.length) {
            return;
        }
        axios.get('/mock/data')
            .then(res => res.data.commodity)
            .then(res => loadData(res))
    }, [])

    //商品数组到商品组件的映射
    const commodityItems:Array<JSX.Element> = commodityData.map((item, index) => {
        const { name, price, isPurchased } = item;
        return (
            <CommodityItem
                name={name}
                price={price}
                isPurchased={isPurchased}
                key={index}
                index={index}
                handleBuy={handleBuy}
            />
        )
    })
    return (
        <div className="mainPage">
            <div className="header">
                所有商品
            </div>
            {commodityItems}
        </div>
    )
}

const mapStateToProps = (state:RootState) => {
    return {
        commodityData: state.data,
    }
}
const mapDispatchToProps = (dispatch:ThunkDispatch<RootState,any,ActionTypes>) => {
    return {
        loadData: (data: DataState) => {
            dispatch(loadData_AC(data));
        },
        handleBuy:(price:number,index:number,name:string) => {
            dispatch(buy_AC(price,index,name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);