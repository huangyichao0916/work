import React, { Component } from 'react';
import {connect} from 'react-redux';

class Content extends Component {
    render() { 
        let lists = this.props.lists.map((item,index) => (
                <li key={index} onClick={() => {
                    this.props.onClick(index);
                }}> {item} </li>
            )
        )
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
        lists:state.lists,
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