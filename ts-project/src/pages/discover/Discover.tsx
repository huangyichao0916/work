import React, { useEffect, useState, FC } from 'react';
import { Header } from '../study/studyHeader.style'
import './discover.styl'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";
import '@/mock/discover-leeson-everyday-data'

import DiscoverLessonEveryday from './discoverLessonEveryday';
import DiscoverTotalChoiceness from './discoverTotalChoiceness'

const Discover: FC<any> = () => {
    const swiperImgArr: number[] = [1, 2, 3, 4, 5];

    const [sw, setSw] = useState<null | Swiper>(null)
    useEffect(() => {
        const newSw = new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
        })
        setSw(newSw)
        return () => {
            setSw(null)
        }
    }, [])

    const images: Array<JSX.Element> = swiperImgArr.map((item: number, i: number) => {
        return (
            <div className="swiper-slide" key={i}>
                <img src={`/imgs/discoverSwiper0${item}.jpg`} alt="图片不见了" width="100%" height="100%" />
            </div>
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
                        images
                    }
                </div>
            </div>
            <div className="discover-content">
                <div className="maitaozheshuo">
                    <div className="maitaozheshuo-title">
                        <div className="maitaozheshuo-img">
                            <img src="https://static001.geekbang.org/resource/image/37/3b/378b7d1867d83e1ab405ee7e052e843b.png" alt="" />
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
                <DiscoverLessonEveryday />
                <DiscoverTotalChoiceness />
            </div>
        </div>
    );
}

export default React.memo(Discover);