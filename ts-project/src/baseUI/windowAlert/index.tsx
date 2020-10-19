import React, { FC,useEffect,useState,useCallback } from 'react';
import './windowAlert.styl';
import debounce from '@/API/debounce';
import classnames from 'classnames';

interface Props {
    content: string;
}
const WindowAlert: FC<Props> = props => {
    const { content } = props;

    const [isWindowAlertShow, setIsWindowAlertShow] = useState<boolean>(false)

    const handleWindowResize = useCallback(
        debounce(function() {
            const winWid:number = window.screen.availWidth;
            if (winWid > 780) {
                setIsWindowAlertShow(true)
            }else{
                setIsWindowAlertShow(false)
            }
        },500),
        [],
    )
    
    useEffect(() => {//在组件挂载的时候就作一次窗口宽度检测
        (function() {
            const winWid:number = window.screen.availWidth;
            if (winWid > 780) {
                setIsWindowAlertShow(true)
            }else{
                setIsWindowAlertShow(false)
            }
        })()
    }, [])

    useEffect(() => {//监听浏览器窗口变化
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize',handleWindowResize);
        }
    }, [])

    const finalClassName:string = classnames(
        {'windowAlert': true},
        {'doNotShow': !isWindowAlertShow}
    )

    return (
        <div className={finalClassName}>
            <div className="content">
                {content}
            </div>
        </div>
    )
}

export default React.memo(WindowAlert);