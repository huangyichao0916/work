import React,{FC,useRef,useState} from 'react';
import './app.styl';
import {renderRoutes} from 'react-router-config';
import Footer from '@/components/footer';

interface Props{
    history: object;
    location: object;
    match: object;
    route: any;
}

const App:FC<Props> = (props) => {
    const [num, setNum] = useState<number[]>([])

    const {route} = props;
    return(
        <div className="app">
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    )
}

export default App;