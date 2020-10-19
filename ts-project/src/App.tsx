import React, { FC } from 'react';
import './App.styl';
import './assets/font/iconfont.css'
import { renderRoutes } from 'react-router-config';
import WindowAlert from '@/baseUI/windowAlert';


const App: FC<any> = props => {
  return (
    <div className="app">
      <WindowAlert content={"请用移动端观看"} maxWidth={1200} />

      {renderRoutes(props.route.routes)}
      {/* <Footer /> */}
    </div>
  );
}

export default App;