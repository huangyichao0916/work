import React, { FC } from 'react';
import './record.styl';
import { connect } from 'react-redux';
import { RootState, RecordState } from '../../store/types';

interface Props {
    data: RecordState;
}

const Record: FC<Props> = (props) => {
    const { data } = props;

    //充值与购买记录的数组到组件的映射
    const items: Array<JSX.Element> = data.map((item, index) => {
        const { price, name, date } = item;
        return (
            <div key={index} className="record">
                <div>
                    商品价格：{price}
                </div>
                <div>
                    商品名称：{name}
                </div>
                <div>
                    购买日期：{date}
                </div>
            </div>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        data: state.record,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);