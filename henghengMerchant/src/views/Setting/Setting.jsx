import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message} from 'antd'
import { withRouter } from 'react-router-dom'
// import axios from '@/api'
import axios from 'axios'
// import { UserOutlined } from '@ant-design/icons';
// import { API } from '@/api/config'
import '@/style/view-style/setting.scss'
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
  };
class Register extends Component {
    state = {
        inf:''
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { name, password, description, address } = values
                console.log(values);
                axios
                    .put('/merchants/modifyMerchant', { name, password, description,address })
                    .then(res => {
                        if (res.data.errCode === 0) {
                                message.success('修改成功')
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
    upImg(e){
        console.log(e);
        // let file = e.target.file[0]
        // let formdata = new formdata();
        // formdata.append('file',file)
        // axios
        //     .post('/merchants/addImg',{})
        console.log(111)
    }
    handleChange(){               //上传商家图片
        let file = document.querySelector('.upload').files[0];
    console.log(file)
    let config={       
    headers:{'Content-Type':'multipart/form-data'}
    }
    let formdata = new FormData();
    formdata.append('file',file);
    axios.post('/merchants/addImg',formdata,config)
    .then((res)=>{
        message.success('上传成功')
    })
    .catch((err)=>{
        
    })
    }
    componentDidMount() {
        const inf =localStorage;
        this.props.form.setFieldsValue({'address':inf.address,'description':inf.description,'name':inf.name})
    }

    componentWillUnmount() {
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className='login animated fadeIn'>
                <div className='model'>
                    <div className='login-form'>
                    <div className='user'>
                    <input type="file" name='file' className="upload" onChange={this.handleChange}/>
                    <input type="submit" value="上传" className="upload"/>
                        <div className="avatar"></div>
                    </div>
                        <Divider />
                        <Form onSubmit={this.handleSubmit} {...layout}>
                            <Form.Item label="userName">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '请输入用户名!' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='用户名'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label="password">
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
                            <Form.Item label="confirm">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请再次输入密码' }]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item  label="description">
                                {getFieldDecorator('description', {
                                    rules: [{ required: true, message: '请输入你的描述' }]
                                })(
                                    <Input
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='商家描述'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label="address">
                                {getFieldDecorator('address', {
                                    rules: [{ required: true, message: '请输入地址' }]
                                })(
                                    <Input
                                    
                                        prefix={<Icon type='home' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='商家地址'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label=" ">
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'
                                    loading={this.state.loading}>
                                    确认修改
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Form.create()(Register))
