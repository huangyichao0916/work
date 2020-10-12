import React,{FC} from 'react';
import './allCoursesItem.styl';
import LazyLoad from 'react-lazyload';
import {Payload} from '@/pages/course/lesson/allCourses/AllCourses'

interface Props{
    day: number;
    teacherDesc: string;
    img: string;
    isPurchased: boolean;
    month: number;
    teacherName: string;
    oldprice: number;
    price: number;
    lessonName: string;
    // type: string;
    id:number;

    handleBuyLesson:(price: number, id: number, payload:Payload) => void;
}
const AllCoursesItem:FC<Props> = props => {
    const {
        img,
        lessonName,
        teacherName,
        teacherDesc,
        month,
        day,
        price,
        oldprice,
        isPurchased,
        id,

        handleBuyLesson,
    } = props;
    return (
        <div className="practiceCamp-item">
            <div className="practiceCamp-item-img">
                <LazyLoad>
                    <img src={img} alt="图片不见了" />
                </LazyLoad>
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{lessonName}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{teacherName}</div>
                    <div className="practiceCamp-item-teacher-desc">{teacherDesc}</div>
                </div>
                <div className="practiceCamp-item-time">{month}讲｜{day}人已学习</div>
                <div className="price-and-join">
                    <div className="practiceCamp-new-first-indent">新人首单</div>
                    <div className="practiceCamp-item-price">￥{price}</div>
                    <div className="practiceCamp-item-oldprice">￥{oldprice}</div>
                    {!isPurchased && <button onClick={() => {
                        handleBuyLesson(price,id,{
                            lessonName,
                            teacherName,
                            teacherDesc,
                        });
                    }}>购买</button>}
                    {isPurchased && <button className="hasBeenPurchased">已购买</button>}
                </div>
            </div>
        </div>
    )
}


export default AllCoursesItem;