import React, { Component } from 'react';
import {connect} from 'react-redux';

class Content extends Component {
    render() { 
        let lists = this.props.lists.map((item,index) => (<li key={index}> {item} </li>))
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

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);