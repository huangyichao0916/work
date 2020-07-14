import React, { Component } from 'react';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Main extends Component {
    componentDidMount(){
        console.log('Main组件的props',this.props);
    }
    componentDidUpdate(){
        console.log('Main组件刷新了');
    }
    render() { 
        console.log('Main重新渲染');
        const {items} = this.props;
        const finalItems = items.map((i,index) => <Item imgUrl={i.imgUrl} name={i.name} key={index}/>)
        return (
            <div>
                <Header />

                <div className="Body">
                    {finalItems}
                    <Link to="/add" className="add">
                        <img src="http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicongigcki54i5x.png" alt=""/>
                    </Link>
                </div>

                <Footer />
            </div>
        );
    }
}
 
export default Main;