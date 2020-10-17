import React, { Component } from 'react';
import { DiscoverTotalChoicenessItemInt } from '@/pages/discover/discoverTotalChoiceness';
import './allDiscoverTotalChoiceness.styl';
import axios from 'axios';
import '@/mock/discover-total-choiceness-data';
import Header from '@/baseUI/header'

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
                <Header  isGoBackNeeded={true}  middleTitle={"精选合辑"}/>
                allchoice
            </div>
        )
    }
}

export default AllDiscoverTotalChoiceness;