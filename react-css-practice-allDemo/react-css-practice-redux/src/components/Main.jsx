import React, { Component } from 'react';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Main extends Component {
    render() { 
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

const mapStateToProps = state => {
    return{
        items : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{

    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Main);