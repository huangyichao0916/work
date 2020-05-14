import React,{Component} from 'react';
import AdInfo from './AdInfo';

class Ad extends Component{
    render(){
        return (
            <div className="Ad">
                <AdInfo />
                <div className="AdTitle">
                    广告名字
                </div>
                <div className="AdContent">
                    广告内容
                </div>
            </div>
        )
    }
}

export default Ad;