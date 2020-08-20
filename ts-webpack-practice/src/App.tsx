import React from 'react';
import './app.styl';
import {renderRoutes} from 'react-router-config';
import Footer from './components/footer';

// interface Props{
//     history: object;
//     location: object;
//     match: object;
//     route: any;
// }

const App = (props: any) => {
    const {route} = props;
    return(
        <div className="app">
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    )
}

export default App;