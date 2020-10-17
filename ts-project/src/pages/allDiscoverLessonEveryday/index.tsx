import React, { Component } from 'react';
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';
import './allDiscoverLessonEveryday.styl';
import axios from 'axios';
import '@/mock/discover-leeson-everyday-data'
import AllDiscoverLessonEverydayItem from '../../components/allDiscoverLessonEveryday/allDiscoverLessonEverydayItem'
import Header from '@/baseUI/header';
// import BScroll from 'better-scroll';

interface State {
    data: Array<DiscoverLessonEverydayItemInt>
}
class AllDiscoverLessonEveryday extends Component<any, State>{
    state = {
        data: [],
    }
    componentDidMount() {
        // new BScroll('.bs-wrapper', {
        //     scrollY: true,
        //     click: true,
        //     scrollX: false,
        // })
        axios.get('/mock/discover/lessonEveryday/all')
            .then(res => this.setState({
                data: res.data
            }))
    }
    render() {
        const { data } = this.state;

        const allItem: Array<JSX.Element> = data.map((item: DiscoverLessonEverydayItemInt) => {
            return (
                <AllDiscoverLessonEverydayItem
                    {...item}
                    key={item.id}
                />
            )
        })

        return (
            <div className="allDiscoverLessonEveryday">
                <Header isGoBackNeeded={true} middleTitle={"每日一课"} />

                <div className="bs-wrapper">
                    <div className="content">
                        {
                            allItem
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AllDiscoverLessonEveryday;