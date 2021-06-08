export const CommodityList = {
    农业: 1,
    畜牧业: 2,
    果业: 3,
    蔬菜: 4
}

export const Login = {
    url: '/users/login',
    method: 'POST',
    params: {
        name: '', //string
        password: '' //string
    }
}
export const Registe = {
    url: ' /users/register',
    method: 'POST',
    params: {
        name: '', //string
        password: '', //string
        phone: '' //string
    }
}
//首页信息
export const HomeData = {
    url: ' /users/getHomeData',
    method: 'GET'
}
//按类别获取商品列表
export const TypedCommodityList = {
    url: '/commoditys/getTypedCommodityList',
    method: 'GET',
    params: {
        typeId: 1 //number
    }
}
//按商家获取商品列表
export const GetCommodityList = {
    url: '/commoditys/getCommodityList',
    method: 'GET',
    params: {
        merchantId: 1 //number
    }
}
//获取商品详细信息
export const GetCommodityDetail = {
    url: ' /commoditys/getCommodityDetail',
    method: 'GET',
    commodityId: 1 //number  商品 id
}
