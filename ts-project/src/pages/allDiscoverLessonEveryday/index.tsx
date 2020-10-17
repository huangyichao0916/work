import React, { Component } from 'react';
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';
import './allDiscoverLessonEveryday.styl';
import axios from 'axios';
import '@/mock/discover-leeson-everyday-data'
import AllDiscoverLessonEverydayItem from '../../components/allDiscoverLessonEveryday/allDiscoverLessonEverydayItem'
import Header from '@/baseUI/header'

interface State {
    data: Array<DiscoverLessonEverydayItemInt>
}
class AllDiscoverLessonEveryday extends Component<any, State>{
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('/mock/discover/lessonEveryday/all')
            .then(res => this.setState({
                data: res.data
            }))
    }
    render() {
        const {data} = this.state;

        return (
            <div className="allDiscoverLessonEveryday">
                <Header  isGoBackNeeded={true}  middleTitle={"每日一课"}/>
                <AllDiscoverLessonEverydayItem
                    {...data[0]}

                    key={2}
                />
            </div>
        )
    }
}

export default AllDiscoverLessonEveryday;