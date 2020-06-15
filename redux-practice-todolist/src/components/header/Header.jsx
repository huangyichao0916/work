import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    state = { 
        content:'',
    }
    render() { 
        return ( 
            <div>
                <input 
                    type="text" 
                    value={this.state.content} 
                    onChange={(event) => {
                        // console.log(event.target.value);
                        this.setState({
                            content:event.target.value,
                        })
                    }}/>
                
                <button onClick={() => {
                    this.props.myOnClick(this.state.content);
                    this.setState({
                        content:'',
                    })
                }}>提交</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists:state.lists.lists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        myOnClick:(content) => {
            let action = {
                type:'add_list',
                value:content,
            };
            dispatch(action);
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Header);