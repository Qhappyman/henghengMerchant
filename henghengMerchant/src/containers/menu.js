const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '展示',
        key: '/public',
        icon: 'appstore',
        auth: [1],
        subs: [{ title: '品牌展示', key: '/public/display', icon: '' }]
    },
    {
        title: '商品信息',
        key: '/form',
        icon: 'form',
        subs: [
            { title: '创建商品', key: '/form/base-form', icon: '' },
            { title: '修改商品', key: '/form/modify', icon: '' }
        ]
    },
    {
        title: '商品管理',
        key: '/show',
        icon: 'pie-chart',
        subs: [
            { title: '我的商品', key: '/show/table', icon: '' },
            { title: '封面管理', key: '/show/upload', icon: '' }
        ]
    },
    {
        title: '其它',
        key: '/others',
        icon: 'paper-clip',
        subs: [
            { title: '404', key: '/404', icon: '' },
            { title: '500', key: '/500', icon: '' }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [1]
    }
]

export default menu
