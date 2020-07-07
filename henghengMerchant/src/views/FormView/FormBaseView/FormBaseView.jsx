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

    handleClose = () => {
        this.setState({ visible: false })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (err) return
            fieldsValue.startTime=fieldsValue.startTime.format('YYYY-MM-DD')
            fieldsValue.endTime=fieldsValue.endTime.format('YYYY-MM-DD')
            let {name,price,description,predictTime,type,endTime,startTime,address,profit}=fieldsValue;
            name=String(name);
            price=String(price);
            description=String(description);
            predictTime=Number(predictTime);
            type=Number(type);
            address=String(address);
            profit=String(profit);
            axios
            .post('/merchants/createCommodity', {name,price,description,predictTime,type,endTime,startTime,address,profit },{
                withCredentials: true
              })
            .then(res => {
                if (res.data.errCode === 0) {       //创建商品，成功后将信息存在localStorage里，以mer开头
                    const INF=res.data.data;
                    for(let i in INF){
                        localStorage.setItem( `mer${i}`,INF[i])
                    }
                    message.info('添加成功')
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
                    <CustomBreadcrumb arr={['商品', '创建']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>创建商品</h3>
                    <Divider></Divider>
                    <p>请填写以下信息来创建一个新的商品</p>
                </div>

                <Row>
                    <Col>
                        <div className='base-style'>
                            <Divider orientation='left'>信息键入</Divider>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label='商品名称'>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: '请输入名称' }]
                                    })(<Input
                                        placeholder='商品名称'
                                    />)}
                                </Form.Item>
                                <Form.Item label='商品价格'>
                                    {getFieldDecorator('price', {
                                        rules: [{ required: true, message: '请输入价格' }]
                                    })(<InputNumber placeholder='请输入价格' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item label='生长周期(天)'>
                                    {getFieldDecorator('predictTime', {
                                        rules: [{ required: true, message: '请输入周期' }]
                                    })(<InputNumber placeholder='请输入周期' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item label='商品描述'>
                                    {getFieldDecorator('description', {
                                        rules: [{ required: true, message: '请输入描述' }]
                                    })(<Input
                                        placeholder='请输入描述信息'
                                    />)}
                                </Form.Item>
                                <Form.Item label='种类'>
                                    {getFieldDecorator('type', {
                                        rules: [{ required: true, message: '请选择种类' }]
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
                                        rules: [{ type: 'object', required: true, message: '请选择日期' }]
                                    })(<DatePicker style={{ width: '100%' }} placeholder='请选择日期' />)}
                                </Form.Item>
                                <Form.Item label='结束时间'>
                                    {getFieldDecorator('endTime', {
                                        rules: [{ type: 'object', required: true, message: '请选择日期' }]
                                    })(<DatePicker style={{ width: '100%' }} placeholder='请选择日期' />)}
                                </Form.Item>
                                <Form.Item label='养殖地址'>
                                    {getFieldDecorator('address', {
                                        rules: [{ required: true, message: '请输入地址' }]
                                    })(<Input
                                        placeholder='请输入地址'
                                    />)}
                                </Form.Item>
                                <Form.Item label='利润'>
                                    {getFieldDecorator('profit', {
                                        rules: [{ required: true, message: '请输入利润' }]
                                    })(<InputNumber placeholder='请输入利润' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                    >
                                        创建
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
