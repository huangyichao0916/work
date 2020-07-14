import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="Footer">
                <div className="planet">星球</div>
                <div className="dynamic">动态</div>
                <div className="discover">发现</div>
                <div className="me">我</div>
            </div>
        );
    }
}
 
export default Footer;