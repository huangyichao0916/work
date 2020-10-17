import React, { FC } from 'react';
import './rechargeRecord.styl';
import { RechargeRecordItem } from '@/components/rechargeRecord/rechargeRecordItem';
import Header from '@/baseUI/header'

import { connect } from 'react-redux';

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
            <Header isGoBackNeeded={true} middleTitle={"充值记录"}/>
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