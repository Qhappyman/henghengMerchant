import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
// import axios from '@/api'     //里面有createaxios，本人觉得配置不好用，未引入
import axios from 'axios'
// import { API } from '@/api/config'    //api使用package里面的proxy代理
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
                let { name, password } = values
                console.log(values);
                axios
                    .post('/merchants/login', { name, password })
                    .then(res => {
                        if (res.data.errCode === 0) {
                            const INF=res.data.data;
                            for(let i in INF){
                                localStorage.setItem( `user${i}`,INF[i])
                            }
                            localStorage.setItem('user',1)
                            this.timer = setTimeout(() => {
                                message.success('登录成功!')
                                this.props.history.push('/')
                                this.enterLoading()
                            }, 2000)
                        } else {
                            message.warning(res.data.errMessage);
                        }
                    })
                    .catch(err => {
                        message.warning('网络错误')
                    })

                // 这里可以做权限校验 模拟接口返回用户权限标识
                switch (values.name) {
                    case 'admin':
                        values.auth = 0
                        break
                    default:
                        values.auth = 1
                }           
            }
        })
    }
    toRegister(){
        this.props.history.push('/register')
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

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                        <h3>哼哼养殖商家登录</h3>
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
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    登录
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    block
                                    onClick={()=>{this.toRegister()}}     //确保this
                                    className='login-form-button'>
                                    注册
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
