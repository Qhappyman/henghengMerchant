import React from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Table, Button} from 'antd'
import '@/style/view-style/table.scss'
import { Popconfirm, message } from 'antd';
// import { Popconfirm, message } from 'antd';
import { Link} from 'react-router-dom'
import axios from 'axios'


function confirm(e) {
    console.log(localStorage.clickId)
    axios
        .delete(`/merchants/deleteCommodity?commodityId=${localStorage.clickId}`)
        .then(()=>{
            message.success('删除成功');
            getGoods();
        })
        .catch((e)=>{

        })
  }
  
  function cancel(e) {
  }
function getGoods(){          //根据用户获取商品信息
    let userId = localStorage.getItem('user_id');
        axios
            .get(`/commoditys/getCommodityList?merchantId=${userId}`)
            .then((res)=>{
                console.log(res);
                goodsList = res.data.data.goodsList;
                for (let i = 0; i < goodsList.length; i++) {
                    data[i]={
                        key: goodsList[i]._id,
                        name: goodsList[i].name,
                        price: goodsList[i].price
                    }
                }
                console.log(goodsList)
            })
            .catch((e)=>{

            })
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
        key: 'picture',
        render: (text, record) => (
            <span>
                <Button type='link' onClick={localStorage.setItem('clickId',text.key)}><Link to="/show/upload">进入</Link></Button>
            </span>
        )
    },
    {
        title: '修改商品',
        key: 'modify',
        render: (text, record) => (
            <span>
                <Button type='link' onClick={localStorage.setItem('clickId',text.key)}><Link to="/form/modify">修改</Link></Button>
            </span>
        )
    },
    {
        title: '删除商品',
        key: 'action',
        render: (text,record) => (
            <Popconfirm
            onClick={localStorage.setItem('clickId',text.key)}
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
let goodsList=[];
const data = []



const Table1 = () => <Table columns={columns} dataSource={data} />
class TableView extends React.Component{
    componentDidMount() {             //进入页面获取信息，展示商家对应的商品
        getGoods();
        
    }
    render(){
        return(
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['管理', '展示']}></CustomBreadcrumb>
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
    }
}
export default TableView
