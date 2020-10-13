import React, { PureComponent } from 'react';
import './studyPathItem.styl';

interface Props {
    name: string;
    icon: string;
    product_count: number;
}
class StudyPathItem extends PureComponent<Props> {
    render() {
        const { name, icon, product_count } = this.props;
        return (
            <div className="studyPathItem">
                <div className="description">
                    <div className="type">
                        {name}
                    </div>
                    <div className="totalLessons">
                        共有{product_count}门课程
                    </div>
                </div>
                <div className="img">
                    <img src={icon} alt="" />
                </div>
            </div>
        );
    }
}

export default StudyPathItem;