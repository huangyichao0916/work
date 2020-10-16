import React, { Component } from 'react';
import { DiscoverTotalChoicenessItemInt } from '@/pages/discover/discoverTotalChoiceness';
import './allDiscoverTotalChoiceness.styl';
import axios from 'axios';
import '@/mock/discover-total-choiceness-data'

interface State {
    data: Array<DiscoverTotalChoicenessItemInt>
}
class AllDiscoverTotalChoiceness extends Component<any, State>{
    state = {
        data: [],
    }
    componentDidMount() {
        axios.get('/mock/discover/totalChoiceness/all')
            .then(res => this.setState({
                data: res.data
            }))
    }
    render() {
        return (
            <div className="allDiscoverTotalChoiceness">
                allchoice
            </div>
        )
    }
}

export default AllDiscoverTotalChoiceness;