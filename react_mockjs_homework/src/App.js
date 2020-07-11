import './App.css';
import { Tabs } from 'antd';
import React, { Component } from 'react';
import Item from './components/item/Item';
import axios from 'axios';
import './mock/data';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    userinfo:[],
    infoThatAfterOneFiter:[],
    infoThatAfterTwoFiter:[],
  };
  componentDidMount(){
    axios.get('/mock')
    .then(res => {
      this.setState({
        userinfo : res.data.userinfo,
        infoThatAfterOneFiter : res.data.userinfo,
        infoThatAfterTwoFiter : res.data.userinfo,
      })
      console.log(res.data.userinfo);
    })
  }

  typeChange = key => {
    let {userinfo} = this.state;
    switch (key) {
      case '1':
        this.setState({
          infoThatAfterOneFiter:userinfo.filter(i => {
            return true;
          }),
        })
        break;
      case '2':
        this.setState({
          infoThatAfterOneFiter:userinfo.filter(i => {
            return i.isFinished === 0;
          }),
        })
        break;
      case '3':
        this.setState({
          infoThatAfterOneFiter:userinfo.filter(i => {
            return i.isFinished === 1;
          }),
        })
        break;
      default:
        break;
    }
  }
  cardTypeChange = key => {
    let {userinfo} = this.state;
    switch (key) {
      case '1':
        this.setState({
          infoThatAfterTwoFiter:userinfo.filter(i => {
            return true;
          })
        })
        break;
      case '2':
        this.setState({
          infoThatAfterTwoFiter:userinfo.filter(i => {
            return i.total > 60;
          })
        })
        break;
      default:
        break;
    }

  }
  render() {
    let {infoThatAfterOneFiter,infoThatAfterTwoFiter,userinfo} = this.state;
    let infoIdOne = [],infoIdTwo = [];
    infoThatAfterOneFiter.forEach(i => {
      infoIdOne.push(i.id);
    })
    infoThatAfterTwoFiter.forEach(i => {
      infoIdTwo.push(i.id);
    })
    let finnalId = infoIdOne.filter(i => infoIdTwo.includes(i));
    let finnalItems = userinfo.filter(i => finnalId.includes(i.id));
    let items = finnalItems.map(user => <Item key={user.id}
                                          imgUrl={user.imgUrl}
                                          title={user.title}
                                          total={user.total}
                                          learned={user.learned}
                                          studyPercentage={user.studyPercentage}
                                          type={user.type}
                                          isFinished={user.isFinished}
    />)
    return (
      <div className="wrapper">
        <div className="App">
          <h2>我的课程</h2>
          <Tabs defaultActiveKey="1" size={'Default'} style={{ marginBottom: 32 }} onChange={this.typeChange}>
            <TabPane tab="全部" key="1">
            </TabPane>
            <TabPane tab="未学完" key="2">
            </TabPane>
            <TabPane tab="已学完" key="3">
            </TabPane>
          </Tabs>
          <Tabs defaultActiveKey="1" type="card" size={'Default'} onChange={this.cardTypeChange}>
            <TabPane tab="所有形式" key="1">
              {items}
            </TabPane>
            <TabPane tab="专栏" key="2">
              {items}
            </TabPane>
            <TabPane tab="视频课" key="3">
              Content of card tab 3
            </TabPane>
            <TabPane tab="微课" key="4">
              Content of card tab 4
            </TabPane>
            <TabPane tab="每日一课" key="5">
              Content of card tab 5
            </TabPane>
            <TabPane tab="其他" key="6">
              Content of card tab 6
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default App;