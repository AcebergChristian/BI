import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import './index.css'




const Chart02 = () => {

    const chart02 = useRef()
    const capat = () => {
        chart02.current.firstChild.style.width = window.innerWidth * 0.29 + 'px'
        chart02.current.firstChild.style.height = window.innerHeight * 0.32 + 'px'
    }

    const chart02option = () => {
        let option = {
            title: {
                text: '近7日销售额',
                left: '2%',
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14'
                }
            },
            backgroundColor: 'rgba(56, 112, 195, 0)',
            grid: {
                top: '25%',
                bottom: '4%',
                left: '4%',
                right: '6%',
                containLabel: true
            },
            tooltip: {
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(219,225,255,1)",
                        width: 1,
                        type: "solid"
                    },
                    splitLine: {
                        show: false
                    }
                },
                data: ['22-06', '22-07', '22-08', '22-09', '22-10', '22-11', '22-12']
            },
            yAxis: {
                name: '金额(万元)',
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(219,225,255,1)",
                        width: 0,
                        type: "solid"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    itemStyle: {
                        color: 'rgba(66, 187, 255, 1)',
                        pacity: 1
                    },
                    data: [50, 230, 224, 218, 135, 147, 260],
                    type: 'line',
                    smooth: true,
                    label: {
                        show: true,
                        color: '#ffffff'
                    }
                }
            ]
        }

        return option
    };

    useEffect(() => {
        setTimeout(() => {
            capat()
        }, 100)
    })
    window.addEventListener("resize", () => { capat() })


    return (
        <div id="chart02" ref={chart02}>

            <ReactEcharts option={chart02option()} />
        </div>
    )

}


export default Chart02;