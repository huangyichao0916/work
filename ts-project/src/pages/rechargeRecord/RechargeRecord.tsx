import React, { FC } from 'react';
import './rechargeRecord.styl';
import { connect } from 'react-redux';
import { RechargeRecordItem } from './rechargeRecordItem/RechargeRecordItem';
import { RechargeRecordItemInt } from '@/store/types'

interface Props {
    dataSource: Array<RechargeRecordItemInt>;
}
const RechargeRecord: FC<Props> = props => {
    const { dataSource } = props;
    const items: Array<JSX.Element> = dataSource.map((item: RechargeRecordItemInt, index: number) => {
        const { year, time, number } = item;
        return (
            <RechargeRecordItem key={index}>
                <div className="up">
                    充值了{number}元
                </div>
                <div className="down">
                    日期：{year}
                    <br />
                    时间：{time}
                </div>
            </RechargeRecordItem>
        )
    })
    return (
        <div className="rechargeRecord">
            <div className="rechargeRecord-header">
                <span className="icon iconfont" onClick={() => window.history.back()}>&#xe647;</span>
                <span className="rechargeRecord-title">充值记录</span>
                <span className="exchange">兑换入口</span>
            </div>
            <div className="rechargeRecord-item-wrapper">
                {items}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataSource: state.getIn(['rechargeRecordDataSource']).toJS(),
    }
}

export default connect(mapStateToProps)(RechargeRecord);