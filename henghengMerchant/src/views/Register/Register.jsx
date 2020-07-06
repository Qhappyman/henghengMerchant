import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
// import axios from '@/api'
import axios from 'axios'
// import { API } from '@/api/config'
import '@/style/view-style/login.scss'

class Login extends Component {
    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({
            loading: true
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { name, password, description, address } = values
                console.log(values);
                axios
                    .post('/merchants/register', { name, password, description,address })
                    .then(res => {
                        if (res.data.errCode === 0) {
                            this.timer = setTimeout(() => {
                                message.success('注册成功')
                                this.props.history.push('/login')
                                this.enterLoading()
                            }, 2000)
                        } else {
                            message.warning(res.data.errMessage);
                        }
                    })
                    .catch(err => {
                        message.warning('网络错误')
                    })      
            }
        })
    }

    componentDidMount() {
        notification.open({
            message: '欢迎使用哼哼养殖',
            duration: null,
            description: ''
        })
    }

    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }
    toLogin(){
        this.props.history.push('/login')
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>哼哼养殖商家注册</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '请输入用户名!' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='用户名'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('description', {
                                    rules: [{ required: true, message: '请输入你的描述' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='商家描述'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('address', {
                                    rules: [{ required: true, message: '请输入地址' }]
                                })(
                                    <Input
                                    
                                        prefix={<Icon type='home' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='商家地址'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    注册
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    block
                                    onClick={()=>{this.toLogin()}}     //确保this
                                    className='login-form-button'>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Form.create()(Login))
