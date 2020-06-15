import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './reducers';
import Header from './components/header/Header';
import Content from './components/content/Content';

store.subscribe(function(){
  console.log(store.getState().lists.lists);
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
