import React, { FC } from 'react';
import './study.styl'
import StudyItem from '@/components/study/studyItem'
import { Link } from 'react-router-dom';
import Header from '@/baseUI/header'

import { connect } from 'react-redux'

import { StudyItemInt } from '@/store/types'

interface Props {
    studyItems: Array<StudyItemInt>
}
const Study: FC<Props> = props => {
    const studyItemList: Array<JSX.Element> = props.studyItems.map((item: StudyItemInt, i: number) => {
        return (
            <StudyItem {...item} key={i} />
        )
    })
    const len: boolean = studyItemList.length > 0;
    return (
        <div className="study">
            <Header leftTitle={"我的学习"} rightTitle={"&#xe615;"} />
            <div className="study-time">
                本周时长<strong>0</strong>小时<strong>0</strong>分钟 <span className="icon iconfont">&#xe613;</span>
            </div>
            <div className="study-record">
                <div className="study-record-item notes">
                    <div>0</div>
                    <div>笔记</div>
                </div>
                <div className="study-record-item comments">
                    <div>0</div>
                    <div>留言</div>
                </div>
                <div className="study-record-item collection">
                    <div>0</div>
                    <div>收藏</div>
                </div>
                <div className="study-record-item download">
                    <div>0</div>
                    <div>下载</div>
                </div>
            </div>

            <div className="study-content-wrapper">
                {!len &&
                    <div> <div className="no-study-record">暂无学习内容</div>
                        <Link to="/course">
                            <button className="subscribe-button">订阅</button>
                        </Link>
                    </div>
                }
                {
                    len && studyItemList
                }
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        studyItems: state.getIn(['studyItemDatatSource']).toJS().reverse(),
    }
}


export default connect(mapStateToProps)(Study);