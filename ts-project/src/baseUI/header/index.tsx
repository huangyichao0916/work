import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.styl';

interface Props {
    isGoBackNeeded?: boolean;
    title: string;
    rightTitle?: string;
    rightTitleURL?: string;
}
class Header extends Component<Props>{
    render() {
        let {
            isGoBackNeeded = false,
            title,
            rightTitle,
            rightTitleURL
        } = this.props;

        const divGoBack: JSX.Element = isGoBackNeeded ?
            (
                <span className="icon iconfont" onClick={() => window.history.back()}>
                    &#xe647;
                </span>
            ) :
            (
                <span className="icon no-goback">no-goback</span>
            );

        let divOther: JSX.Element;

        if (rightTitle) {
            if (rightTitleURL) {
                divOther = (
                    <div className="rightTitle">
                        <Link to={rightTitleURL}>
                            {rightTitle}
                        </Link>
                    </div>
                )
            }else{
                divOther = (
                    <div className="rightTitle">
                        {rightTitle}
                    </div>
                )
            }
        }else{
            if (rightTitleURL) {
                throw new Error("组件Props参数错误，传入rightTitleURL的前提是必须要传入rightTitle");
            }else{
                divOther = (
                    <div className="rightTitle no-right-title">
                        no-right-title
                    </div>
                )
            }
        }

        return (
            <div className="baseUIHeader">
                {
                    divGoBack
                }
                <div className="title">
                    {
                        title
                    }
                </div>
                {
                    divOther
                }
            </div>
        )
    }
}

export default Header;