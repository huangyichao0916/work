import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import accountImg from '@/assets/imgs/account.png';
import './account.styl';
import RechargeItem from './rechargeItem/RechargeItem';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '@/store/types';
import { 
    ActionType,
    rechargeAndRecordActionCreator,
 } from '@/store/action';

interface Props {
    balance: number;
    handleRecharge: Function;
}
interface State {
    recharge: number[];
    highlightKey: number;
}
class Account extends Component<Props, State> {
    state = {
        recharge: [6, 12, 68, 108, 218, 318, 418, 648, 998],
        highlightKey: 0,
    }
    goBack = (): any => {
        window.history.back();
    }
    handleHighlight = (key: number): any => {
        this.setState({
            highlightKey: key
        })
    }
    render() {
        const rechargeItemList: Array<JSX.Element> = this.state.recharge.map((item, index) => {
            return (
                <RechargeItem
                    myClassName={classNames({
                        'highlight': index === this.state.highlightKey
                    })}
                    money={item}
                    key={index}
                    handleHighlight={() => this.handleHighlight(index)}
                />
            )
        })
        return (
            <div className="account-wrapper">
                <div className="account-top">
                    <div className="account-header">
                        <span className="icon iconfont" onClick={this.goBack}>&#xe647;</span>
                        <span className="account-title">账户</span>
                        <span className="exchange">兑换入口</span>
                    </div>
                    <div className="account-balance-wrapper">
                        <div className="account-balance">￥{this.props.balance.toFixed(2)}</div>
                        <Link to="/rechargeRecord">
                            <div className="view-detail">查看明细</div>
                        </Link>
                    </div>
                    <div className="account-img">
                        <img src={accountImg} alt="图片不见了" />
                    </div>
                </div>
                <div className="recharge-wrapper">
                    <div className="recharge-title">
                        <span className="main-title">充值</span>
                        <span className="supplement-title">（充值金额仅限ios App使用）</span>
                    </div>
                    <div className="recharge-item-wrapper">
                        {
                            rechargeItemList
                        }
                    </div>
                    <button onClick={() => { this.props.handleRecharge(this.state.recharge[this.state.highlightKey]) }}>确认充值</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.getIn(['account'])
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, ActionType>) => {
    return {
        handleRecharge: (payload: number) => {
            dispatch(rechargeAndRecordActionCreator(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);