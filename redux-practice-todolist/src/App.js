import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './reducers';
import Header from './components/header/Header';
import Content from './components/content/Content';

store.subscribe(function(){
  console.log('123',store.getState().get('lists'));
  // console.log(store.getState().get('lists')._tail.array);
  // console.log(store.getState()._root.entries);
})

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
