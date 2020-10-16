import React, { FC, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '@/mock/discover-leeson-everyday-data'

import DiscoverLessonEverydayItem from './discoverLessonEverydayItem'

export interface DiscoverLessonEverydayItemInt {
    id: number;
    title: string;
    subtitle: string;
    avatar: string;
}

const DiscoverLessonEveryday: FC<any> = props => {
    const [discoverData, setDiscoverData] = useState<DiscoverLessonEverydayItemInt[]>([]);

    const loadData = useCallback(
        () => {
            axios.get('mock/discover/lessonEveryday')
                .then(res => {
                    if (!res) {
                        throw new Error('出错了')
                    }
                    setDiscoverData(res.data)
                })
                .catch(err => console.log(err))
        },
        [],
    )

    useEffect(() => {
        loadData();
    }, [])

    const items: Array<JSX.Element> = discoverData.map((item: DiscoverLessonEverydayItemInt) => {
        return (
            <DiscoverLessonEverydayItem
                {...item}
                key={item.id}
            />
        )
    })

    return (
        <div className="geek-university">
            <div className="geek-university-header">
                <span></span>
                <div className="geek-university-title">每日一课</div>
                <div className="view-more">查看更多</div>
            </div>
            <div className="geek-university-wrapper">
                {
                    items
                }
            </div>
            <div className="change-for-other" onClick={loadData}>
                <span className="icon iconfont">&#xe638; 换一换</span>
            </div>
        </div>
    )
}

export default React.memo(DiscoverLessonEveryday);
// export default DiscoverLessonEveryday;