import React, { Component } from 'react'
import { Layout, Row, Col, Upload, message, Button, Icon, Divider} from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import Axios from 'axios';


function upLoad1(){
    let file = document.getElementById('upload1').files[0];
    console.log(file)
    let config={       
    headers:{'Content-Type':'multipart/form-data'}
    }
    let formdata = new FormData();
    formdata.append('file',file);
    Axios.post(`/merchants/addCommodityImg/{clickId}`,formdata,config)
    .then((res)=>{
        message.success('上传成功')
    })
    .catch((err)=>{
    })
}
function upLoad2(){
    let file = document.getElementById('upload1').files[0];
    console.log(file)
    let config={       
    headers:{'Content-Type':'multipart/form-data'}
    }
    let formdata = new FormData();
    formdata.append('file',file);
    Axios.post(`/merchants/addCommodityImgList/${localStorage.clickId}`,formdata,config)
    .then((res)=>{
        message.success('上传成功')
    })
    .catch((err)=>{ 
    })
}
class UploadView extends Component {
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        imageUrl: ''
    }
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['管理', '上传图片']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>上传图片</h3>
                    <p>请在这里上传商品封面和介绍的相关图片</p>
                </div>
                <Row gutter={10}>
                    <Col span={30}>
                        <div className='base-style'>
                            <Divider orientation='left'>上传商品封面</Divider>
                            <Upload>
                                <Button>
                                    <Icon type='upload' /> Click to Upload<input type="file" id="upload1" onChange={upLoad1}/>
                                </Button>
                            </Upload>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>上传商品介绍图片</Divider>
                            <Upload>
                                <Button>
                                    <Icon type='upload' /> Click to Upload<input type="file" id="upload2" onChange={upLoad2}/>
                                </Button>
                            </Upload>
                        </div>
                    </Col>
                    <Col span={12}>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default UploadView
