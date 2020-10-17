import React, { FC } from 'react';
import './allCoursesItem.styl';
import MyButton from '@/baseUI/myButton'

import {
    StudyItemInt,
    CourseLessonItem
} from '@/store/types'

interface Props extends CourseLessonItem {
    index: number
    handleBuyLesson: (price: number, index: number, payload: StudyItemInt) => void;
}
const AllCoursesItem: FC<Props> = props => {
    const {
        title,
        authorName,
        authorDesc,
        avatar,
        articleCount,
        totalPeopleLearn,
        priceMarket,
        priceSale,
        haveLearned,

        index,
        handleBuyLesson,
    } = props;

    let myButton: JSX.Element = haveLearned ?
        (
            <MyButton
                clickable={false}
            >
                已购买
            </MyButton>
        ) :
        (
            <MyButton
                myOnClick={() => {
                    handleBuyLesson(priceSale, index, {
                        title,
                        authorName,
                        authorDesc,
                    });
                }}
                clickable={true}
            >
                购买
            </MyButton>
        )

    return (
        <div className="practiceCamp-item2">
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
                <div className="practiceCamp-item-time">{articleCount}讲｜{totalPeopleLearn}人已学习</div>
                <div className="price-and-join">
                    <div className="practiceCamp-new-first-indent">新人首单</div>
                    <div className="practiceCamp-item-price">￥{priceSale}</div>
                    <div className="practiceCamp-item-oldprice">￥{priceMarket}</div>
                </div>
            </div>
        </div>
    )
}


export default AllCoursesItem;