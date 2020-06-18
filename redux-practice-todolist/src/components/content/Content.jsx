import React, { Component } from 'react';
import {connect} from 'react-redux';
import {is} from 'immutable';

class Content extends Component {
    shouldComponentUpdate(nextState,nextProps){
        let isChanged = !is(this.props,nextProps);
        return isChanged;
    }
    componentDidUpdate(){
        console.log('update');
    }
    render() { 
        console.log('-----------',this.props.lists);
        let lists = this.props.lists.map((item,index) => (
                <li key={index} onClick={() => {
                    this.props.onClick(index);
                }}> {item} </li>
            )
        )
        // let arr = [1,5,6,5];
        // let lists = arr.map((item,index) => (
        //     <li key={index}>
        //         {item}
        //     </li>
        // ))
        console.log(lists);//发现react可以直接渲染出List数据类型的数据
        return ( 
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists:state.get('lists'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick:(index) => {
            let action = {
                type:'delete_list',
                value:index,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);