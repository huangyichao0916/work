import React,{Component} from 'react';
import Article from './Article';

class ArticleList extends Component{

    render(){
        let {articles,fnc} = this.props;
        return(
            <div className = 'ArticleList'>
                {/* <Article authorName={articles[0].authorName} time={articles[0].time} title={articles[0].title}/> */}
                {
                    articles.filter(fnc).map((item,i) => <Article authorName={item.authorName} time={item.time} title={item.title} key={i}/>)
                }
            </div>
        )
    }
}

export default ArticleList;