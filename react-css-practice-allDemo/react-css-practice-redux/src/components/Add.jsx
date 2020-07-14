import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Add extends Component {
    state = {
        content:'',
    }
    handleChange = (event) => {
        this.setState({
            content:event.target.value,
        })
    }
    render() {
        let {content} = this.state;
        return (
            <div id="add">
                <Link className="getBack" to="/">返回</Link>
                <div className="img">
                    <img src="http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg" alt=""/>
                </div>
                <div className="input">
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={() => {
                        this.props.handleClick(content)
                        this.props.history.goBack();
                    }}>提交</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        handleClick:(payload) => {
            dispatch({
                type : 'add',
                payload,
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);