import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="Header">
                <div className="top">
                    <div className="title">
                        <div className="txt">知识星球</div>
                    </div>
                    <div className="button">加号</div>
                </div>
                <div className="search">
                    <input type="text" placeholder="搜索用户、星球或内容"/>
                </div>
            </div>
        );
    }
}
 
export default Header;