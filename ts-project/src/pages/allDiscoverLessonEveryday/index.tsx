import React, { Component } from 'react';
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';
import './allDiscoverLessonEveryday.styl';
import axios from 'axios';
import '@/mock/discover-leeson-everyday-data'
import AllDiscoverLessonEverydayItem from './allDiscoverLessonEverydayItem'
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
        return (
            <div className="allDiscoverLessonEveryday">
                <Header 
                    isGoBackNeeded={true}
                    title={"每日一课"}
                />
                <AllDiscoverLessonEverydayItem
                    id={3}
                    title={'asd'}
                    subtitle={'asd'}
                    avatar={'asd'}

                    key={2}
                />
            </div>
        )
    }
}

export default AllDiscoverLessonEveryday;