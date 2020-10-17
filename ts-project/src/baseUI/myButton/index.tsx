import React, { FC, useRef, useEffect } from 'react';
import classnames from 'classnames';
import './myButton.styl';

interface Props {
    myOnClick?: (...args: any[]) => void;
    clickable: boolean;
}
const MyButton: FC<Props> = props => {
    const {
        myOnClick,
        clickable,
    } = props;

    const ref = useRef()

    useEffect(() => {//找到父元素并且把父元素的position设置为relative，让button能够吸附在右下角
        let parentNode: ParentNode = (ref.current as HTMLElement).parentNode;
        (parentNode as HTMLDivElement).style.position = 'relative';
    },[])

    let finalClassName: string = classnames(
        { 'myButton': true },
        { 'clickable': clickable, }
    );

    let finalOnClick: (...args: any[]) => void | null = null;

    if (myOnClick && clickable) {
        finalOnClick = function (...args: any[]) {
            myOnClick.call(this, ...args)
        }
    }

    return (
        <button className={finalClassName} onClick={finalOnClick} ref={ref}>
            {props.children}
        </button>
    )
}

export default MyButton;