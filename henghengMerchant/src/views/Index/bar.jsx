import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Bar extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('bar'))
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['农业', '畜牧业', '果业', '蔬菜', '其他', '百度', '谷歌', '必应', '其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '农业',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '畜牧业',
                    type: 'bar',
                    stack: '畜牧业',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '果业',
                    type: 'bar',
                    stack: '果业',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '蔬菜',
                    type: 'bar',
                    stack: '蔬菜',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '其他',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                }
               
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='bar' style={{ height: 300, background: '#fff' }}></div>
    }
}

export default Bar
