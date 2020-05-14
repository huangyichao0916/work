import React, { Component } from 'react';

class Article extends Component{
    
    render(){
        let {authorName,time,title} = this.props;
        return(
            <div className="Article">
                <div className="ArticleInfo">
                    <a href="#" id = "zhuanlan">专栏</a>
                    <a href="#">·{authorName}</a>
                    <a href="#">·{time}</a>
                    <a href="#">·前端</a>
                </div>
                <div className="ArticleTitle">
                    {title}
                </div>
            </div>
        )
    }
}

export default Article;