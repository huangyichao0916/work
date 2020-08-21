import React, { useEffect } from 'react';
import './mainPage.styl';
import CommodityItem from '../../components/commodityItem';
import axios from 'axios';
import '../../mock';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState, DataState } from '../../store/types';
import { ActionTypes, loadData_AC } from '../../store/actions';

interface Props {
    commodityData: DataState;
    loadData: (data: DataState) => void;
}

const MainPage = (props: Props) => {
    const { loadData, commodityData, } = props;
    useEffect(() => {
        if (commodityData.length) {
            return;
        }
        axios.get('/mock/data')
            .then(res => res.data.commodity)
            .then(res => loadData(res))
    }, [])
    let commodityItems: Array<JSX.Element> = commodityData.map((item, index) => {
        const { name, price, isPurchased } = item;
        return (
            <CommodityItem
                name={name}
                price={price}
                isPurchased={isPurchased}
                key={index}
                index={index}
            />
        )
    })
    return (
        <div className="mainPage">
            <div className="header">
                所有商品
            </div>
            {/* <CommodityItem price={10} name={'ivory'}/> */}
            {commodityItems}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        commodityData: state.data,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
    return {
        loadData: (data: DataState) => {
            dispatch(loadData_AC(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);