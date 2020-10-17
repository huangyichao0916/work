import React, { FC } from 'react';
import './practiceCampItem.styl';

import MyButton from '@/baseUI/myButton';

import {
    StudyItemInt,
    PracticeCampItemInt,
} from '@/store/types';

interface Props extends PracticeCampItemInt {
    index: number;
    onHandleJoinCamp: (price: number, id: number, lesson: StudyItemInt) => void;
}
const PracticeCampItem: FC<Props> = props => {
    const {
        title,
        authorName,
        authorDesc,
        avatar,
        priceMarket,
        priceSale,
        haveLearned,
        beginDate,

        index,
        onHandleJoinCamp,
    } = props;

    let myButton: JSX.Element = haveLearned ?
        (
            <MyButton
                clickable={false}
            >
                已报名
            </MyButton>
        ) :
        (
            <MyButton
                myOnClick={() => {
                    onHandleJoinCamp(priceSale, index, {
                        title,
                        authorName,
                        authorDesc,
                    });
                }}
                clickable={true}
            >
                立即报名
            </MyButton>
        )

    return (
        <div className="practiceCamp-item">
            {
                myButton
            }
            <div className="practiceCamp-item-img">
                <img src={avatar} alt="图片不见了" />
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{title}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{authorName}</div>
                    <div className="practiceCamp-item-teacher-desc">{authorDesc}</div>
                </div>
                <div className="practiceCamp-item-time">最近开营：{beginDate}</div>
                <div className="price-and-join">
                    <div className="practiceCamp-item-price">￥{priceSale}</div>
                    <div className="practiceCamp-item-oldprice">￥{priceMarket}</div>
                </div>
            </div>
        </div>
    )
}

export default PracticeCampItem;