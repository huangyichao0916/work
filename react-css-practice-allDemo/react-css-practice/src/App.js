import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import Main from './components/Main';
import Add from './components/Add';

class App extends Component {
  state={
    items:[
      {
          imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
          name:'111',
      },
      {
          imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
          name:'111',
      },
      {
          imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
          name:'111',
      },
      {
          imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
          name:'111',
      },
      {
          imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
          name:'111',
      },
  ]
  }
  handleSubmit = (value) => {
    console.log('handleSubmit');
    const obj = {
      imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
      name:value,
    }
    const {items} = this.state;
    items.unshift(obj);
    this.setState({
      items,
    })
  }
  render(){
    const {items} = this.state;
    return (
      <BrowserRouter>
        <Route path="/" exact render={() => <Main items={items}/>}/>
        <Route path="/add" render={() => <Add handleSubmit={this.handleSubmit}/>}/>
        {/* <Route path="/" exact component={Main}/>
        <Route path="/add" component={Add}/> */}
      </BrowserRouter>
    );
  }
}

export default App;
