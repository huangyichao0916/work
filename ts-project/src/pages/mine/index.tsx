import React, { Component, Dispatch } from 'react';
import './mine.styl'
import avatar from '@/assets/imgs/avatar.JPG';
import imgg from '@/assets/imgs/account.png';
import MineItem from './mineItem'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";
import classNames from 'classnames';
import { connect } from 'react-redux'
import BScroll from 'better-scroll';
import {MinePageDataItem} from '../../store/types'
import { setIsDotedToFalseActionCreator, SetIsDotedToFalseAction } from '../../store/action';


interface Props{
    items:Array<MinePageDataItem>;
    balance:number;
    handleOnClick:(id:number, isDotShow:boolean) => void;
}
class Mine extends Component<Props> {
    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
        })
        new BScroll('.bscroll-wrapper', {
            scrollY: true,
            click: true,
            scrollX: false
        })
    }
    render() {
        let { items, handleOnClick, balance } = this.props;
        const myItems:Array<JSX.Element> = items.map((i:MinePageDataItem) => {

            const { id, title, isBalanceShow, linkTo, isDotShow, icon } = i;

            const myClassName:string = classNames({
                'mine-item-wrapper': true,
                'hidden': isBalanceShow === 1 ? false : true,
            })
            return (
                <MineItem
                    title={title}
                    linkTo={linkTo}
                    myClassName={myClassName}
                    isDotShow={isDotShow}
                    id={id}
                    icon={icon}
                    balance={balance}

                    key={id}
                    handleOnClick={handleOnClick}
                />
            )
        })
        return (
            <div className="mine">
                <div className="mine-header-wrapper">
                    <span>我的</span>
                    <span className="icon iconfont">&#xe665;</span>
                </div>
                <div className="bscroll-wrapper" >
                    <div className="content">
                        <div className="mine-info-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt="图片不见了" />
                            </div>
                            <div className="name-and-phone">
                                <h3 className="name">
                                    Geek_14dce3
                                </h3>
                                <div className="phone-and-selfPage">
                                    <div className="phone">12345678910</div>
                                    <div className="selfPage">
                                        个人主页<span className="icon iconfont right">&#xe613;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={imgg} alt="图片不见了" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                        
                        {myItems.length > 0 && myItems}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.getIn(['mineItemDateSource']).toJS(),
        balance: state.getIn(['account']),
    }
}
const mapDispatchToProps = (dispatch:Dispatch<SetIsDotedToFalseAction>) => {
    return {
        handleOnClick: (id:number, isDotShow:boolean) => {
            // console.log('id为' + id)
            if (!isDotShow) {
                console.log('因为本身不带有Dot，所以阻断了dispatch请求')
                return;
            }
            dispatch(setIsDotedToFalseActionCreator(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);