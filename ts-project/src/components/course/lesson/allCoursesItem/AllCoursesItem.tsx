import React,{FC} from 'react';
import './allCoursesItem.styl';
import LazyLoad from 'react-lazyload';
import {StudyItemInt} from '@/store/types'

interface Props{
    title:string;
    authorName:string;
    authorDesc:string;
    avatar:string;
    articleCount:number;
    totalPeopleLearn:number;
    priceMarket:number;
    priceSale:number;
    haveLearned:boolean;

    index:number
    handleBuyLesson:(price: number, index: number, payload:StudyItemInt) => void;
}
const AllCoursesItem:FC<Props> = props => {
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
    return (
        <div className="practiceCamp-item2">
            {/* <div className="practiceCamp-item-img">
                <LazyLoad>
                    <img src={avatar} alt="图片不见了" />
                </LazyLoad>
            </div> */}
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
                    {!haveLearned && <button onClick={() => {
                        handleBuyLesson(priceSale,index,{
                            title,
                            authorName,
                            authorDesc,
                        });
                    }}>购买</button>}
                    {haveLearned && <button className="hasBeenPurchased">已购买</button>}
                </div>
            </div>
        </div>
    )
}


export default AllCoursesItem;