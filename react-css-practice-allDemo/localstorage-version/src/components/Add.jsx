import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Add extends Component {
    state = {
        content:'',
    }
    componentDidMount(){
        console.log('Add组件的props',this.props);
    }
    handleChange = (event) => {
        this.setState({
            content:event.target.value,
        })
    }
    handleClick = () => {
        let {content} = this.state;
        console.log(content);
        this.props.handleSubmit(content);
    }
    render() {
        return (
            <div id="add">
                <Link className="getBack" to="/">返回</Link>
                <div className="img">
                    <img src="http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg" alt=""/>
                </div>
                <div className="input">
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>提交</button>
                </div>
            </div>
        );
    }
}

export default Add;