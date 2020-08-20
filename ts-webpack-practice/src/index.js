import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {renderRoutes} from 'react-router-config';
// import App from './App';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {renderRoutes(routes)}
            {/* <App /> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'));