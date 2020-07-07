import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/button.scss'

import { Layout, Row, Col, Divider } from 'antd'


class ButtonView extends Component {
    state = {
    }

    enterLoading = () => {
        this.setState({ loading: true })
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true })
    }
    render() {
        return (
            <Layout className='button animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['通用', '展示']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>哼哼养殖展示</h3>
                    <Divider />
                    <p>这里是我们商品的部分介绍</p>
                </div>
                <div>
                    <Row gutter={8}>
                        <Col span={12}>
                            <div className='base-style' style={{height:'400px'}} id="display1">
                               
                            </div>                                  
                        </Col>
                        <Col span={12}>
                            <div className='base-style' style={{height:'400px'}} id="display2">
                                
                          </div>                           
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}

export default ButtonView
