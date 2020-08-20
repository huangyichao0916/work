import React from 'react';
import {Redirect} from 'react-router-dom';

import App from '@/App';
import MainPage from '../pages/mainPage';
import Recharge from '../pages/recharge';
import Record from '../pages/record';

const routes = [
    {
        path: '/',
        component: App,
        routes:[
            {
                path: '/',
                exact: true,
                render: () => <Redirect to='/mainPage'/>
            },
            {
                path: '/mainPage',
                component: MainPage,
            },
            {
                path: '/recharge',
                component: Recharge,
            },
            {
                path: '/record',
                component: Record,
            }
        ]
    }
]

export default routes;