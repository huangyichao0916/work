import React, { Component } from 'react';
import './mineItem.styl'
import { Link } from 'react-router-dom';

interface Props {
    title:string;
    linkTo:string;
    myClassName:string;
    isDotShow:number;
    id:number;
    icon:string;
    
    balance:number;
    handleOnClick:(id:number, isDotShow:boolean) => void;
}
class MineItem extends Component<Props> {
    render() {
        // console.log(this.props)
        let { isDotShow, title, myClassName, linkTo, balance, id, icon, handleOnClick } = this.props;
        const isDotShowBoo:boolean = isDotShow === 1 ? true : false;
        // console.log(title)
        return (
            <Link to={linkTo} className={myClassName} onClick={() => handleOnClick(id, isDotShowBoo)}>
                <span className="icon iconfont left" dangerouslySetInnerHTML={{ __html: icon }}></span>
                <div className="title-wrapper">
                    <div className="title">{title}</div>
                    {isDotShowBoo && <div className="red-dot"></div>}
                    <div className="detail">{balance}</div>
                </div>
                <span className="icon iconfont right">&#xe613;</span>
            </Link>
        );
    }
}


export default MineItem;