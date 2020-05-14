import React,{ Component } from 'react';
import Header from './Header';
import ArticleList from './ArticleList';
import Ad from './Ad';


class JuejinApp extends Component{
    constructor(){
        super();
        this.state = {
            articles:[
                {
                    type:'hot',
                    title:'node.js深入浅出',
                    authorName:'hycs',
                    time:'2小时前'
                },
                {
                    type:'hot',
                    title:'笔记本电脑',
                    authorName:'华硕',
                    time:'2个月前'
                },
                {
                    type:'hot',
                    title:'编程',
                    authorName:'1234',
                    time:'2年前'
                },
                {
                    type:'newest',
                    title:'Apple Watch',
                    authorName:'Apple',
                    time:'1小时前'
                },
                {
                    type:'newest',
                    title:'iPadOS',
                    authorName:'苹果',
                    time:'3年前'
                },
                {
                    type:'newest',
                    title:'三三三三',
                    authorName:'无呜呜呜',
                    time:'13小时前'
                },
                {
                    type:'newest',
                    title:'我们我们我们',
                    authorName:'黄黄黄',
                    time:'1个月前'
                },
                {
                    type:'rank',
                    title:'结合实际场景',
                    authorName:'wangly',
                    time:'32小时前'
                },
                {
                    type:'rank',
                    title:'unity3D',
                    authorName:'asldkjsakld',
                    time:'2小时前'
                },
                {
                    type:'rank',
                    title:'麦子',
                    authorName:'六六大顺',
                    time:'5小时前'
                },
                {
                    type:'rank',
                    title:'电脑',
                    authorName:'【ing过',
                    time:'2天前'
                },
                {
                    type:'rank',
                    title:'iPhone',
                    authorName:'苹果',
                    time:'5天前前'
                }
            ],
            fnc:this.fncHot,
            classNames:[
                'btn actived',
                'btn',
                'btn'
            ]
        }
    }
    render(){
        let {articles,fnc,classNames} = this.state;
        return (
            <div className="wrapper">
                <Header change={this.change.bind(this)} classNames={classNames}/>
                <Ad />
                <ArticleList articles={articles} fnc={fnc}/>
            </div>
        )
    }
    fncHot(item){
        return item.type === 'hot';
    }
    fncNewest(item){
        return item.type === 'newest';
    }
    fncRank(item){
        return item.type === 'rank';
    }
    change(index){
        let arr = [this.fncHot,this.fncNewest,this.fncRank];
        let myClassNames = ['btn','btn','btn'];
        this.setState({
            fnc:arr[index],
            classNames:myClassNames,
        })
        myClassNames[index] = 'btn actived';
        this.setState({
            classNames:myClassNames
        })
    }
}

export default JuejinApp;