import React from 'react';
// import Record from '../record';
import './recharge.styl';
import { BalanceState, RootState } from '../../store/types';
import { ActionTypes, handleRechage_AC } from '../../store/actions';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';

interface Props{
    balance: BalanceState;
    handleButtonClick: (account:number) => void;
}
interface State{
    chargeItems: Array<number>;
    activeItem: number;
}
class Recharge extends React.Component<Props,State>{
    handleClick:(index:number) => void;
    constructor(props:Props){
        super(props);
        this.state = {
            chargeItems:[100,200,300,400,500,600],
            activeItem:0,
        }
        this.handleClick = (index:number):void => {
            this.setState({
                activeItem: index,
            })
        }
    }
    render(){
        const {balance,handleButtonClick} = this.props;
        const items:Array<JSX.Element> = this.state.chargeItems.map((item,index) => {
            return(
                <div 
                className={index === this.state.activeItem ? "item active" : 'item'} 
                key={index}
                onClick={() => this.handleClick(index)}
                >
                    {item}
                </div>
            )
        })
        return(
            <div className="recharge">
                <div className="balance">
                    {balance}
                </div>
                <div className="wrapper">
                    {items}
                </div>
                <button onClick={() => handleButtonClick(this.state.chargeItems[this.state.activeItem])}>充值</button>
            </div>
        )
    }
}

const mapStateToProps = (state:RootState) => {
    return{
        balance: state.balance,
    }
}
const mapDispatchToProps = (dispatch:ThunkDispatch<RootState,any,ActionTypes>) => {
    return{
        handleButtonClick:(account:number) => {
            dispatch(handleRechage_AC(account))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recharge);