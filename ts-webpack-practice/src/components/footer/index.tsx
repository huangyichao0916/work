import React,{FC} from 'react';
import './footer.styl';
import {NavLink} from 'react-router-dom'

const Footer:FC = (props) => {
    return(
        <div className="footer">
            <NavLink to="/mainPage" activeClassName="selected">首页</NavLink>
            <NavLink to="/record" activeClassName="selected">购买与充值记录</NavLink>
            <NavLink to="/recharge" activeClassName="selected">充值</NavLink>
        </div>
    )
}

export default Footer;