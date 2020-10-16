import React, { Component } from 'react';
import { DiscoverLessonEverydayItemInt } from '@/pages/discover/discoverLessonEveryday';
import './allDiscoverLessonEveryday.styl';
import axios from 'axios';
import '@/mock/discover-leeson-everyday-data'

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
                123
            </div>
        )
    }
}

export default AllDiscoverLessonEveryday;