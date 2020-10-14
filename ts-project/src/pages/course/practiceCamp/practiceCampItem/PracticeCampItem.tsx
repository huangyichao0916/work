import React,{FC} from 'react';
import './practiceCampItem.styl'
import {StudyItemInt} from '../../../../store/types';

interface Props{
    day: number;
    teacherDesc: string;
    id: number;
    img: string;
    isPurchased: boolean;
    month: number;
    teacherName: string;
    oldprice: number;
    price: number;
    lessonName: string;

    onHandleJoinCamp:(price:number,id:number,lesson:StudyItemInt) => void;
}
const PracticeCampItem:FC<Props> = props => {
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

        onHandleJoinCamp,
    } = props;

    return (
        <div className="practiceCamp-item">
            <div className="practiceCamp-item-img">
                <img src={img} alt="图片不见了" />
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{lessonName}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{teacherName}</div>
                    <div className="practiceCamp-item-teacher-desc">{teacherDesc}</div>
                </div>
                <div className="practiceCamp-item-time">最近开营：{month}月{day}日</div>
                <div className="price-and-join">
                    <div className="practiceCamp-item-price">￥{price}</div>
                    <div className="practiceCamp-item-oldprice">￥{oldprice}</div>
                    {!isPurchased && <button onClick={() => {
                        onHandleJoinCamp(price,id,{
                            title: lessonName,
                            authorName:teacherName,
                            authorDesc:teacherDesc,
                        });
                    }}>立即报名</button>}
                    {isPurchased && <button className="hasBeenPurchased">已报名</button>}
                </div>
            </div>
        </div>
    )
}

export default PracticeCampItem;