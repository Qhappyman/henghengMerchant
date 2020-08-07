## 基于React的云养殖系统

本系统基于react进行开发，用于互联网+与挑战杯，致力于打造成线上实地可用的软件，主要功能为实现农村养殖户与城市之间的商品交流，并设置农村合作社作为中间商



### 技术栈

`React+ React-Router + Redux+ Antd + Axios + React-router-dom+thunk

> `Create React App`    脚手架工具快速搭建项目结构

> `react-loadable  路由懒加载

> `react-redux   更方便的redux工具`

> `echarts   数据可视化`

> `prettier@1.18.2`    代码风格统一

### 基本功能

+ 路由赖加载
+ 商家信息修改
+ 创建商品
+ 修改商品信息
+ 修改商品与品牌图片封面
+ 联系合作社

### 项目结构

```
├── public                   # 不参与编译的资源文件
├── src                      # 主程序目录
│   ├── api                     # axios 封装
│   ├── assets                  # 资源文件
│   │   ├── font                    # 字体文件
│   │   └── images                  # 图片资源
│   ├── components              # 全局公共组件
│   │   ├── CustomBreadcrumb        # 面包屑导航
│   │   └── CustomMenu              # menu 菜单
│   ├── contatiners             # 页面结构组件
│   ├── routes                  # 路由目录
│   ├── store                   # redux 配置
│   ├── style                   # 样式目录
│   ├── utils                   # 工具类
│   ├── views                   # UI 页面
│   ├── APP.js                  # App.js
│   └── index.js                # index.js
├── .prettierrc.js           # 代码规范
├── config-overrides.js      # antd 样式按需加载
```

### 使用方法

```npm
yarn

yarn start

yarn build

```



本产品后续会继续开发，实现在2021年成为线上可用的产品