import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import './index.css'




const Chart03 = () => {


    const chart03 = useRef()
    const capat = () => {
        chart03.current.firstChild.style.width = window.innerWidth * 0.29 + 'px'
        chart03.current.firstChild.style.height = window.innerHeight * 0.32 + 'px'
    }
    useEffect(() => {
        setTimeout(() => { capat() }, 100)
    })
    window.addEventListener("resize", () => { capat() })



    const chart03option = () => {
        let option = {
            title: {
                text: '消费人群年龄构成',
                left: '2%',
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                left: '70%',
                top: 'middle',
                textStyle: {
                    color: '#ffffff'
                }
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0.3, 0.8]
                }
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    center: ['34%', '60%'],
                    data: [
                        { value: 335, name: '<22' },
                        { value: 510, name: '22~30' },
                        { value: 274, name: '30~50' },
                        { value: 165, name: '50~65' },
                        { value: 120, name: '>65' }
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    label: {
                        show: false
                    },
                    roseType: 'radius',
                    itemStyle: {
                        color: '#b64cd7',
                        shadowBlur: 200
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 1200;
                    },
                    label: {
                        color: 'rgba(255, 255, 255, 0.4)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.4)'
                        },
                        smooth: 0.2,
                        length: 6,
                        length2: 10
                    }
                }
            ]
        }


        return option
    };


    return (
        <div id="chart03" ref={chart03}>
            <ReactEcharts option={chart03option()} />
        </div>
    )

}


export default Chart03;