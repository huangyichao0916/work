import React,{Component} from 'react';

class Header extends Component{

    render(){
        let {classNames} = this.props
        return(
            <div className='Header'>
                <div className={classNames[0]} onClick={this.click.bind(this,0)}>热门</div>
                <div className={classNames[1]} onClick={this.click.bind(this,1)}>最新</div>
                <div className={classNames[2]} onClick={this.click.bind(this,2)}>热榜</div>
            </div>
        )
    }
    click(index){
        this.props.change(index);
    }
}

export default Header;