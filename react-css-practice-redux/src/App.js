import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import Main from './components/Main';
import Add from './components/Add';
import {createStore} from 'redux'
import {Provider} from 'react-redux';

const defaultState = [
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
const reducer = (state=defaultState,action) => {
  switch (action.type) {
    case 'add':
      let obj = {
        imgUrl:'http://pic22.nipic.com/20120801/9058465_094128507140_2.jpg',
        name:action.payload,
      }
      return [obj,...state];
      break;
  
    default:
      return state;
      break;
  }
}
const store = createStore(reducer);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Main}/>
          <Route path="/add" component={Add}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
