import React, { useEffect, useState, FC } from 'react';
import { Header } from '../study/studyHeader.style'
import './discover.styl'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";
import GeekUniverSityItem from './geekUniversityItem/GeekUniversityItem'
import axios from 'axios';
import '@/mock/discover-practiceCamp-data'

interface DiscoverData {
    id: number;
    title: string;
    img: string;
    lessonDesc: string;
    teacher: string;
    teacherDesc: string;
    phase: number;
    month: number;
    day: number;
}
const Discover: FC<any> = () => {
    const swiperImgArr: number[] = [1, 2, 3, 4, 5];
    const [discoverData, setDiscoverData] = useState<DiscoverData[]>([]);

    const [sw, setSw] = useState<null | Swiper>(null)
    useEffect(() => {
        const newSw = new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
        })
        setSw(newSw)
        return() => {
            setSw(null)
        }
    }, [])
    useEffect(() => {
        axios.get('mock/discover/practiceCamp')
            .then(res => res.data.practiceCamps)
            .then(res => {
                setDiscoverData(res);
            })
    }, [])

    const items: Array<JSX.Element> = discoverData.map((item:DiscoverData, index:number) => {
        return (
            <GeekUniverSityItem {...item} key={index} />
        )
    })

    return (
        <div className="discover">
            <Header>
                <span className="discover-header-title">发现</span>
                <span className="icon iconfont">&#xe645;</span>
            </Header>
            <div className="discover-input-search">
                <input className="icon iconfont" type="text" placeholder="&#xe606; 搜索课程、课程内容、每日一课等" />
            </div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        swiperImgArr.map((item:number, i:number) => {
                            return (
                                <div className="swiper-slide" key={i}>
                                    <img src={`/imgs/discoverSwiper0${item}.jpg`} alt="图片不见了" width="100%" height="100%" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="discover-content">
                <div className="maitaozheshuo">
                    <div className="maitaozheshuo-title">
                        <div className="maitaozheshuo-img">
                            <img src="" alt="" />
                        </div>
                        <div className="maitaozheshuo-name">
                            卖桃者说
                        </div>
                        <span className="icon iconfont">&#xe613;</span>
                    </div>
                    <div className="maitaozheshuo-article">
                        <span className="icon iconfont">&#xe608;</span>
                        第320期 | 你离一个优秀架构师还差几步?
                    </div>
                </div>
                <div className="geek-university">
                    <div className="geek-university-header">
                        <span></span>
                        <div className="geek-university-title">极客大学</div>
                        <div className="view-more">查看更多</div>
                    </div>
                    <div className="geek-university-wrapper">
                        {items}
                    </div>
                </div>
                <div className="geek-university">
                    <div className="geek-university-header">
                        <span></span>
                        <div className="geek-university-title">每日一课</div>
                        <div className="view-more">查看更多</div>
                    </div>
                    <div className="geek-university-wrapper">
                        {items}
                    </div>
                    <div className="change-for-other">
                        <span className="icon iconfont">&#xe638; 换一换</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default React.memo(Discover);