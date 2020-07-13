import React, { Component } from 'react';

class Item extends Component {
    state = {  }
    render() { 
        const {imgUrl,name} = this.props;
        return (
            <div className="item">
                <div className="img">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="describe">
                    {name}
                </div>
            </div>
        );
    }
}
 
export default Item;