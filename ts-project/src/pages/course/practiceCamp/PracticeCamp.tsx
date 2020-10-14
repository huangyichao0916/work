import React, { useEffect, useState, FC } from 'react';
import PracticeCampItem from './practiceCampItem/PracticeCampItem'
import './practiceCamp.styl'
import axios from 'axios';
import '@/mock/course-practiceCamp-data';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { addDataToPracticeCampActionCreator, ActionType, practiceCampBuyLessonActionCreator } from '@/store/action';
import BScroll from 'better-scroll';
import { PracticeCampItemInt, StudyItemInt } from '@/store/types'
import { RootState } from '@/store/types';


interface Props {
    practiceCampDataSource: Array<PracticeCampItemInt>;
    loadPracticeCampData: (payload: Array<PracticeCampItemInt>) => void;
    onHandleJoinCamp: (price: number, id: number, lesson: StudyItemInt) => void;
}
const PracticeCamp: FC<Props> = props => {
    let { practiceCampDataSource, loadPracticeCampData, onHandleJoinCamp } = props;
    useEffect(() => {
        if (practiceCampDataSource.length > 0) {
            // console.log('因为practiceCampDataSource中有数据，所以阻断了axios请求');
            return;
        }
        axios.get('mock/course/practiceCamp')
            .then(res => res.data.practiceCamps)
            .then(res => { loadPracticeCampData(res) })
    }, [])

    const [scroll, setScroll] = useState<null | BScroll>(null);
    useEffect(() => {
        const bscroll = new BScroll('.practiceCamp-wrapper', {
            scrollX: false,
            click: true,
            scrollY: true,
        })
        setScroll(bscroll);
        return () => {
            setScroll(null)
        }
    }, [])

    const items: Array<JSX.Element> = practiceCampDataSource.map((item: PracticeCampItemInt, i: number) => {
        const { img, title, name, desc, month, day, price, oldprice, isPurchased } = item;
        return (
            <PracticeCampItem
                img={img}
                id={i}
                lessonName={title}
                teacherName={name}
                teacherDesc={desc}
                month={month}
                day={day}
                price={price}
                oldprice={oldprice}
                isPurchased={isPurchased}

                key={i}

                onHandleJoinCamp={onHandleJoinCamp}
            />
        )
    })
    return (
        <div className="practiceCamp-wrapper">
            <div className="content">
                <div className="image">
                    <img src="/imgs/discoverSwiper05.jpg" alt="" />
                </div>
                <div className="practiceCampCamp-item-wrapper">
                    <div className="practiceCamp-title">
                        <div className="practiceCamp-main-title">训练营</div>
                        <div className="go-my-classroom">去我的教室学习</div>
                    </div>
                    {
                        items
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        practiceCampDataSource: state.getIn(['practiceCampDataSource']).toJS(),
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>) => {
    return {
        loadPracticeCampData: (payload: Array<PracticeCampItemInt>) => {
            dispatch(addDataToPracticeCampActionCreator(payload));
        },
        onHandleJoinCamp: (price: number, id: number, lesson: StudyItemInt) => {
            // console.log(payload,id,lesson)
            dispatch(practiceCampBuyLessonActionCreator(price, id, lesson))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeCamp);