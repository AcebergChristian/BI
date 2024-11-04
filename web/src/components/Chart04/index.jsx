import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import './index.css'





const Chart04 = () => {


    const chart04 = useRef()
    const [addclasschart04, setaddclasschart04] = useState({
        addclasschart04focus : true
    })

    const chart04toggleleft =()=>{
        setaddclasschart04(pre=>{
            pre.addclasschart04focus = true
            return {...pre}
        })
    }
    const chart04toggleright =()=>{
        setaddclasschart04(pre=>{
            pre.addclasschart04focus = false
            return {...pre}
        })
    }

    const capat = () => {
        chart04.current.firstChild.style.width = window.innerWidth * 0.29 + 'px'
        chart04.current.firstChild.style.height = window.innerHeight * 0.32 + 'px'
    }
    

    useEffect(() => {
        setTimeout(() => {capat()},100)

    })
    window.addEventListener("resize", () => {
        capat()
    })



    const chart04optionmoney = () => {
        const option1 = {
            title: {
                text: '近7日销售额',
                left: '2%',
                textStyle:{
                    color: '#ffffff',
                    fontSize : '14'
                }
              },
              tooltip: {
                axisPointer: {
                    type: 'cross'
                }
            },
            backgroundColor: 'rgba(56, 112, 195, 0)',
            grid: {
                top: '25%',
                bottom: '4%',
                left: '4%',
                right: '8%',
                containLabel: true
            },
            xAxis: {
                show:true,
                //name:'amount',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(219,225,255,0.8)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                show:true,
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(219,225,255,0.8)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [
              {
                type: 'bar',
                encode: {
                  // Map the "amount" column to X axis.
                  x: 'amount',
                  // Map the "product" column to Y axis
                  y: 'product'
                },
                itemStyle: {
                    color: '#4caaff'
                }
            }
            ],
            dataset: {
                source: [
                  ['score', 'amount', 'product'],
                  [89.3, 201245, 'Matcha Latte'],
                  [157.1, 126755, 'Milk Tea'],
                  [74.4, 419032, 'Cheese Cocoa'],
                  [50.1, 782574, 'Cheese Brownie'],
                  [89.7, 480212, 'Matcha Cocoa']
                ].sort(function (a, b) {
                    return a[1] - b[1];
                })
              }
          }
        return option1
    };



    const chart04optionnum = () => {
        const option2 = {
            title: {
                text: '近7日销售额',
                left: '2%',
                textStyle:{
                    color: '#ffffff',
                    fontSize : '14'
                }
              },
              tooltip: {
                axisPointer: {
                    type: 'cross'
                }
            },
            backgroundColor: 'rgba(56, 112, 195, 0)',
            grid: {
                top: '25%',
                bottom: '4%',
                left: '4%',
                right: '8%',
                containLabel: true
            },
            xAxis: {
                show:true,
                //name:'amount',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(219,225,255,0.8)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                show:true,
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(219,225,255,0.8)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [
              {
                type: 'bar',
                encode: {
                  // Map the "amount" column to X axis.
                  x: 'amount',
                  // Map the "product" column to Y axis
                  y: 'product'
                },
                itemStyle: {
                    color: '#4caaff'
                }
            }
            ],
            dataset: {
                source: [
                  ['score', 'amount', 'product'],
                  [89.3, 48212, 'Matcha Latte'],
                  [157.1, 78254, 'Milk Tea'],
                  [74.4, 41032, 'Cheese Cocoa'],
                  [50.1, 12755, 'Cheese Brownie'],
                  [89.7, 20145, 'Matcha Cocoa']
                ].sort(function (a, b) {
                    return a[1] - b[1];
                })
              }
          }

        return option2
    };


    return (
        <>
            <div id="chart04" ref={chart04}>
                <ReactEcharts option={addclasschart04.addclasschart04focus?chart04optionmoney():chart04optionnum()} />

                <div className='chart04_twoselect' >
                    <div className="chart04_twoselect_salemoney" onClick={chart04toggleleft} style={{background:addclasschart04.addclasschart04focus?"#ffffff":"#ffffff00",color:addclasschart04.addclasschart04focus?"#4c81ff":"#ffffff"}}>
                        <div>销售额</div>
                    </div>
                    <div className="chart04_twoselect_salenumber" onClick={chart04toggleright} style={{background:addclasschart04.addclasschart04focus?"#ffffff00":"#ffffff",color:addclasschart04.addclasschart04focus?"#ffffff":"#4c81ff"}}>
                        <div>销售量</div>
                    </div>
                </div>
            </div>


        </>
    )

}


export default Chart04;

