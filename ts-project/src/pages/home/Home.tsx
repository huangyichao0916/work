import React, { FC } from 'react';
import {renderRoutes} from 'react-router-config';
import Footer from '../../pages/discover/footer/Footer';

interface Routes{
    routes:Array<any>;
    [otherProps:string]:any;
}
interface Props{
    route:Routes;
    [otherProps:string]:any;
}
const Home:FC<Props> = props => {
    // console.log(props)
    return (
        <>
            <Footer />
            {renderRoutes(props.route.routes)}
        </>
    )
}

export default Home;