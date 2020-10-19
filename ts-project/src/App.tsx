import React, { useEffect, useState, FC } from 'react';
import './App.styl';
import './assets/font/iconfont.css'
import { renderRoutes } from 'react-router-config';
import WindowAlert from '@/baseUI/windowAlert';


const App: FC<any> = props => {
  // const [isAlertShow, setIsAlertShow] = useState<boolean>(true);
  // useEffect(() => {
  //   const windowWidth: number = document.documentElement.clientWidth;
  //   if (windowWidth < 780) {
  //     setIsAlertShow(false)
  //   }
  // }, [])

  // console.log(window.screen.availWidth);
  return (
    <div className="app">
      <WindowAlert content={"请用移动端观看"} />

      {renderRoutes(props.route.routes)}
      {/* <Footer /> */}
    </div>
  );
}

export default App;