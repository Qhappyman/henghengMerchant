import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/about.scss'
const AboutView = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>关于哼哼养殖</h3>
            <Divider />
            <p>云养殖，是一款服务于农户与农产品消费者之间的第三方电子商务平台，主
要销售绿色农产品，为双方提供安全可靠的交易环
境、个性化体验、真实数据展
示等多项服务。
哼哼养殖团队已进行初期的市场调研，根据市场调研结果设计出符合目标客
户期望的创新产品。并且进行实地调研，与个别乡镇达成初期合作意向。初期团
队来自不同专业以更好的研发项目，并且拟成立重庆哼哼养殖科技有限公司。本
团队为公司后续发展制定了战略规划、商业模式分析、市场营销策略、风险控制
计划、财务预估分析以达到企业获取盈利的目标。
云养殖有效的解决了农村农作物滞销以及畜牧业发展瓶颈问题，并且为农产
品消费者提供优质的消费平台，实现了现代社会绿色化、智能化、高效化发展。</p>
        </div>
        <div className="base-style" id="about-img">

        </div>
    </Layout>
)
export default AboutView
