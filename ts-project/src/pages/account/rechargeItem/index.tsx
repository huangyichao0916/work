import React, { FC } from 'react';
import './rechargeItem.styl'

interface Props{
    money:number;
    handleHighlight:(e:React.MouseEvent) => void;
    myClassName:string;
}
const RechargeItem: FC<Props> = props => {
    const {handleHighlight, myClassName, money} = props;
    return (
        <div
            className={"recharge-item " + myClassName}
            onClick={handleHighlight}
        >
            <div>￥{money}</div>
        </div>
    );
}

export default RechargeItem;