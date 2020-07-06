import React from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Table, Button} from 'antd'
import '@/style/view-style/table.scss'
import { Popconfirm, message } from 'antd';
// import { Popconfirm, message } from 'antd';
import { Link} from 'react-router-dom'
import axios from 'axios'

function confirm(e) {
    axios
        .delete(`/merchants/deleteCommodity?commodityId=5efff2a0c248e149e89f39f8`)
        .then(()=>{
            message.success('删除成功');
        })
        .catch((e)=>{

        })
  }
  
  function cancel(e) {
  }
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '商品封面管理',
        dataIndex: 'picture',
        key: 'picture',
        render: (text, record) => (
            <span>
                <Button type='link'><Link to="/show/upload">进入</Link></Button>
            </span>
        )
    },
    {
        title: '修改商品',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type='link'><Link to="/form/modify">修改</Link></Button>
            </span>
        )
    },
    {
        title: '删除商品',
        key: 'action',
        render: () => (
            <Popconfirm
    title="确定删除此商品?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
<a href="">Delete</a>
  </Popconfirm>
        )
    }
]

const data = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `商品${i+1}`,
        price: Math.floor(Math.random()*1000)
    })
}

const Table1 = () => <Table columns={columns} dataSource={data} />
const TableView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['通用', '按钮']}></CustomBreadcrumb>
        </div>

        <Row>
            <Col>
                <div className='base-style'>
                    <h3 id='basic'>商品展示</h3>
                    <Divider />
                    <Table1 />
                </div>
            </Col>
        </Row>
    </Layout>
)

export default TableView
