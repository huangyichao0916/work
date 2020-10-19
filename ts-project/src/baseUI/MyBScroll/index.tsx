import React, { useState, useEffect, useRef, useMemo, FC } from "react"
import BScroll from "better-scroll"
import styled from 'styled-components';
import debounce from '@/API/debounce'

// const LoadingComp:FC<any> = (props) => {
//   return (
//     <div className="loading-component">
//       loading
//     </div>
//   )
// }

const ScrollContainer = styled.div`
  width: 100%;
  height: 60vh;
`

interface Pos{
  x:number;
  y:number;
}

interface Props {
  direction?: 'vertical' | 'horizental';
  click?: boolean;
  refresh?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;

  onScroll?: (...args:any[]) => void;
  pullUp?: (...args:any[]) => void;
  pullDown?: (...args:any[]) => void;
}
const Scroll: FC<Props> = (props) => {
  const [bScroll, setBScroll] = useState<BScroll | null>(null);

  const scrollContaninerRef = useRef();

  const {
    direction = 'vertical',
    click = true,
    refresh = true,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const {
    pullUp = () => { console.log('拉到了底部') },
    pullDown = () => { console.log('拉到了顶部') },
    onScroll,
  } = props;

  let pullUpDebounce:Function = useMemo(() => {
    return debounce(pullUp, 500)
  }, [pullUp]);

  let pullDownDebounce:Function = useMemo(() => {
    return debounce(pullDown, 500)
  }, [pullDown]);

  useEffect(() => {
    const scroll:BScroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });

    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
  }, []);

  useEffect(() => {//在滚动的时候触发事件
    if (!bScroll || !onScroll) return;

    bScroll.on('scroll', onScroll)
    return () => {
      bScroll.off('scroll', onScroll);
    }
  }, [onScroll, bScroll]);

  useEffect(() => {//判断是否滑动到了底部
    if (!bScroll || !pullUp) return;
    const handlePullUp = () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullUp);
    return () => {
      bScroll.off('touchEnd', handlePullUp);
    }
  }, [pullUp, pullUpDebounce, bScroll]);

  useEffect(() => {//判断用户的下拉动作
    if (!bScroll || !pullDown) return;
    const handlePullDown = (pos:Pos) => {
      if (pos.y > 50) {
        pullDownDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    }
  }, [pullDown, pullDownDebounce, bScroll]);


  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  );
}

export default Scroll;