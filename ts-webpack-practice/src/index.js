import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';

import axios from 'axios';
import './mock';

axios.get('/mock/data')
    .then(res => console.log(res.data.commodity));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);