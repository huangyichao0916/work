import React, { FC, useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import '@/mock/discover-total-choiceness-data';
import { Link } from 'react-router-dom';

import DiscoverTotalChoicenessItem from './discoverTotalChoicenessItem'

export interface DiscoverTotalChoicenessItemInt {
    id: number;
    title: string;
    avatar: string;
}

const DiscoverTotalChoiceness: FC<any> = props => {
    const [discoverData, setDiscoverData] = useState<DiscoverTotalChoicenessItemInt[]>([]);

    const loadData = useCallback(
        () => {
            axios.get('mock/discover/totalChoiceness')
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

    const items: Array<JSX.Element> = discoverData.map((item: DiscoverTotalChoicenessItemInt) => {
        return (
            <DiscoverTotalChoicenessItem
                {...item}
                key={item.id}
            />
        )
    })

    return (
        <div className="geek-university">
            <div className="geek-university-header">
                <span></span>
                <div className="geek-university-title">精选合辑</div>
                <Link to="/allDiscoverTotalChoiceness">
                    <div className="view-more">
                        查看更多
                    </div>
                </Link>
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

export default React.memo(DiscoverTotalChoiceness);
// export default DiscoverTotalChoiceness;