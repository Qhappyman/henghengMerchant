import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import axios from 'axios'
import {
    Layout,
    Row,
    Col,
    Divider,
    Form,
    Input,
    Button,
    InputNumber,
    DatePicker,
    Radio,
    message
} from 'antd'
import '@/style/view-style/form.scss'




class FromView extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        visible: true
    }
    componentDidMount(){
        const commodityId = localStorage.mermerchantId;           //获取到商品的信息
    }
    handleClose = () => {
        this.setState({ visible: false })
    }

    handleSubmit = e => {
        e.preventDefault()
        const commodityId = localStorage.mermerchantId;   //获取到商品的Id，但是点击商品是怎么知道他的Id
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (err) return
            fieldsValue.startTime=Date(fieldsValue.startTime.format('YYYY-MM-DD'))
            fieldsValue.endTime=Date(fieldsValue.endTime.format('YYYY-MM-DD'))
            let {name,price,description,predictTime,type,endTime,startTime,address,profit}=fieldsValue;
            name=String(name);
            price=String(price);
            description=String(description);
            predictTime=Number(predictTime);
            type=Number(type);
            address=String(address);
            profit=String(profit);
            axios                           //这个有问题，下面的参数应该按需传过去
            .put(`/merchants/modifyCommodity?commodityId=${String(commodityId)}`, {name,price,description,predictTime,type,endTime,startTime,address,profit })
            .then(res => {
                if (res.data.errCode === 0) {
                    const INF=res.data.data;
                    console.log(INF);
                    message.info('修改成功')
                } else {
                    message.warning(res.data.errMessage);
                }
            })
            .catch(err => {
                message.warning('网络错误')
            })           
        })
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致!')
        } else {
            callback()
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    }

    handleWebsiteChange = value => {
        let autoCompleteResult
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['@google.com', '@163.com', '@qq.com'].map(domain => `${value}${domain}`)
        }
        this.setState({ autoCompleteResult })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 10 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 0
                },
                sm: {
                    span: 10,
                    offset: 6
                }
            }
        }

        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['商品', '修改']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>修改商品信息</h3>
                    <Divider></Divider>
                </div>

                <Row>
                    <Col>
                        <div className='base-style'>
                            <Divider orientation='left'>信息修改</Divider>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label='商品名称'>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: false, message: '请输入名称' }]
                                    })(<Input
                                        placeholder='商品名称'
                                    />)}
                                </Form.Item>
                                <Form.Item label='商品价格'>
                                    {getFieldDecorator('price', {
                                        rules: [{ required: false, message: '请输入价格' }]
                                    })(<InputNumber placeholder='请输入价格' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item label='生长周期(天)'>
                                    {getFieldDecorator('predictTime', {
                                        rules: [{ required: false, message: '请输入周期' }]
                                    })(<InputNumber placeholder='请输入周期' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item label='商品描述'>
                                    {getFieldDecorator('description', {
                                        rules: [{ required: false, message: '请输入描述' }]
                                    })(<Input
                                        placeholder='请输入描述信息'
                                    />)}
                                </Form.Item>
                                <Form.Item label='种类'>
                                    {getFieldDecorator('type', {
                                        rules: [{ required: false, message: '请选择种类' }]
                                    })(
                                        <Radio.Group>
                                            <Radio value='1'>农业</Radio>
                                            <Radio value='2'>畜牧业</Radio>
                                            <Radio value='3'>果业</Radio>
                                            <Radio value='4'>蔬菜</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label='开始时间'>
                                    {getFieldDecorator('startTime', {
                                        rules: [{ type: 'object', required: false, message: '请选择日期' }]
                                    })(<DatePicker style={{ width: '100%' }} placeholder='请选择日期' />)}
                                </Form.Item>
                                <Form.Item label='结束时间'>
                                    {getFieldDecorator('endTime', {
                                        rules: [{ type: 'object', required: false, message: '请选择日期' }]
                                    })(<DatePicker style={{ width: '100%' }} placeholder='请选择日期' />)}
                                </Form.Item>
                                <Form.Item label='养殖地址'>
                                    {getFieldDecorator('address', {
                                        rules: [{ required: false, message: '请输入地址' }]
                                    })(<Input
                                        placeholder='请输入地址'
                                    />)}
                                </Form.Item>
                                <Form.Item label='利润'>
                                    {getFieldDecorator('profit', {
                                        rules: [{ required: false, message: '请输入利润' }]
                                    })(<InputNumber placeholder='请输入利润' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                    >
                                        确认修改
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FromView)

export default WrappedNormalLoginForm
