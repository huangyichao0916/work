import React, { PureComponent } from 'react';
import './studyPath.styl';
import StudyPathItem from './studyPathItem/StudyPathItem';
import axios from 'axios'

interface Item {
    id: number;
    name: string;
    icon: string;
    product_count: number;
    [otherProps: string]: any;
}
interface State {
    data: Item[];
}
class StudyPath extends PureComponent<any, State> {
    state = {
        data: [],
    }
    componentDidMount() {
        axios.get<Item[]>('/data/studyPath.json')
            .then(res => this.setState({
                data: res.data,
            }))
    }
    render() {
        const { data } = this.state;
        const finalStudyPathItem: Array<JSX.Element> = data.map((i: Item, index: number) => {
            const { id, name, icon, product_count } = i;
            return (
                <StudyPathItem key={id} name={name} product_count={product_count} icon={icon} />
            )
        })
        return (
            <div className="studyPath">
                <div className="top">
                    <div className="left">
                        学习路径
                    </div>
                    <div className="right">
                        查看全部
                    </div>
                </div>
                <div className="studyPathItemWrapper">
                    <div className="content">
                        {finalStudyPathItem}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyPath;