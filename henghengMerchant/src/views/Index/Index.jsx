import React, { Component } from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

import BarEcharts from './bar.jsx'
import PieEcharts from './pie.jsx'
import LineEcharts from './line.jsx'
import ScatterEcharts from './scatter.jsx'
import PictorialBarEcharts from './pictorialBar.jsx'

class Index extends Component {
    fullToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.request(document.getElementById('bar'))
        }
    }
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row gutter={24} className='index-header'>
                    <Col span={6}>
                        <div className='base-style wechat'>
                            
                            <div>
                                <span>哼哼养殖</span>
                                <div>介绍</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style qq'>
                            
                            <div>
                                <span>哼哼养殖</span>
                                <div>发展</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style dingding'>

                            <div>
                                <span>哼哼养殖</span>
                                <div>优势</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style weibo'>
                            
                            <div>
                                <span>哼哼养殖</span>
                                <div>使用</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>哼哼养殖效果展示</div>
                                
                            </div>
                            <Divider />
                            <BarEcharts />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <LineEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <PieEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <ScatterEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <PictorialBarEcharts />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index
