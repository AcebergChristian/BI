import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import 'echarts-wordcloud'
import './index.css'



const Chart06 = () => {

    const worddata = [
        { "name": "羽绒服", "value": 30 },
        { "name": "棉袄", "value": 23 },
        { "name": "秋衣", "value": 22 },
        { "name": "苦茶籽", "value": 21 },
        { "name": "梅西", "value": 20 },
        { "name": "世界杯", "value": 19 },
        { "name": "iPhone", "value": 18 },
        { "name": "Mac", "value": 17 },
        { "name": "卡塔尔", "value": 14 },
        { "name": "美妆", "value": 13 },
        { "name": "新冠", "value": 10 },
        { "name": "人口净增长", "value": 8 },
        { "name": "球服", "value": 6 },
    ]


    const chart06 = useRef()
    
    const chart06option = () => {
        let option = {
            title: {
                text: ''
            },
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 30],
                rotationRange: [-90, 90],
                shape: 'pentagon', 
                textStyle: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random()*155 +120),
                            Math.round(Math.random()*155 +120),
                            Math.round(Math.random()*155 +120)
                        ].join(',') + ')'
                    }, 
                    emphasis: {
                        shadowBlur: 212,
                        shadowColor: '#ade222'
                    }
                },
                data: worddata
            }]
        }

        return option
    };

    return (
        <div id="chart06">
            <div className="chart06_title">
                销售热词
            </div>
            <div className="worddata" ref={chart06}>
                <ReactEcharts option={chart06option()} />
            </div>
        </div>
    )

}


export default Chart06;



// {
//     worddata.map((item, index) => {
//         return (
//             <div style={{ float:'left', width: item.val*3+'px', height: item.val*3+'px' }}>
//                 <div style={{ fontSize: item.val + 'px', color: '#333333' }}>
//                     {item.name}
//                 </div>
//             </div>
//         )
//     })
// }