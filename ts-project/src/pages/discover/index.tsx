import React, { useEffect, useState, FC } from 'react';
import Header from '@/baseUI/header'
import './discover.styl'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";
import '@/mock/discover-leeson-everyday-data'

import DiscoverLessonEveryday from './discoverLessonEveryday';
import DiscoverTotalChoiceness from './discoverTotalChoiceness'

const Discover: FC<any> = () => {
    const swiperImgArr: string[] = [
        'https://static001.geekbang.org/resource/image/cb/87/cb5421545f441b0940be4e99f508f587.jpg',
        'https://static001.geekbang.org/resource/image/yy/c3/yy1407ebbb40d7c4534134bbc18b2ac3.jpg',
        'https://static001.geekbang.org/resource/image/e1/a1/e1638d3182a0ed76ed5f446612cf90a1.png',
        'https://static001.geekbang.org/resource/image/d0/02/d008de059acbb6c623fc5332bac2e902.jpg',
        'https://static001.geekbang.org/resource/image/d7/a1/d7993d03d0604yyeeed2a08c2cfb1da1.png',
    ];

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

    const images: Array<JSX.Element> = swiperImgArr.map((item: string, i: number) => {
        return (
            <div className="swiper-slide" key={i}>
                <img src={item} alt="图片不见了" width="100%" height="100%" />
            </div>
        )
    })

    return (
        <div className="discover">
            <Header leftTitle={"发现"} rightTitle={"&#xe645;"}/>
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