import './index.css'
import React, { Component, useState, useRef, useEffect, memo } from 'react'
import ReactDom from 'react-dom';
//import axios from 'axios'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';




const Chart01 = memo(() => {

    const chart01columns = [
        "数据ID",
        "用户ID",
        "商品名称",
        "评价等级",
        "评价内容"
    ]

    const chart01data = [
        {
            "chart01data_id": '0001',
            "chart01data_user": 'user001',
            "chart01data_goodname": 'nikes AJ1 篮球鞋',
            "chart01data_star": 5,
            "chart01data_text": 'nice'
        },
        {
            "chart01data_id": '0002',
            "chart01data_user": 'user002',
            "chart01data_goodname": '长款棉袄',
            "chart01data_star": 5,
            "chart01data_text": 'good'
        },
        {
            "chart01data_id": '0003',
            "chart01data_user": 'user003',
            "chart01data_goodname": '巴萨球服',
            "chart01data_star": 5,
            "chart01data_text": 'yes!!!'
        },
        {
            "chart01data_id": '0004',
            "chart01data_user": 'user004',
            "chart01data_goodname": 'nikes AJ13 篮球鞋',
            "chart01data_star": 1,
            "chart01data_text": '垃圾玩意'
        },
        {
            "chart01data_id": '0005',
            "chart01data_user": 'user005',
            "chart01data_goodname": '秋衣灰',
            "chart01data_star": 3,
            "chart01data_text": 'soso'
        },
        {
            "chart01data_id": '0006',
            "chart01data_user": 'user006',
            "chart01data_goodname": 'iphone 12',
            "chart01data_star": 2,
            "chart01data_text": 'e......'
        },
        {
            "chart01data_id": '0007',
            "chart01data_user": 'user007',
            "chart01data_goodname": 'NJR 苦茶籽',
            "chart01data_star": 1,
            "chart01data_text": '垃圾玩意'
        },
        {
            "chart01data_id": '0008',
            "chart01data_user": 'user008',
            "chart01data_goodname": 'YSY 口红',
            "chart01data_star": 1,
            "chart01data_text": '垃圾玩意'
        },
        {
            "chart01data_id": '0009',
            "chart01data_user": 'user009',
            "chart01data_goodname": '疫苗',
            "chart01data_star": 1,
            "chart01data_text": '垃圾玩意'
        },
        {
            "chart01data_id": '0010',
            "chart01data_user": 'user010',
            "chart01data_goodname": 'nike鞋',
            "chart01data_star": 1,
            "chart01data_text": '垃圾玩意'
        } 
    ]

    const chart01up=(speed)=>{
        console.log(speed)
    }

    // const onerenderref = useRef(true) //用于渲染一次的ref
    // useEffect(()=>{
    //     if(onerenderref) {
    //         onerenderref.current = false;
    //         return;
    //     }
    //     chart01up(1)
    // },[])

    return (
        <div id="chart01">
            <div className="chart01table">
                <div className="chart01columnsout">
                    {chart01columns.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="chart01columns">{item}</div>
                            </>
                        )
                    })}
                </div>
                <div className="chart01dataout">
                <div className="chart01datain" style={{position:'relative'}}>
                    {chart01data.map((item, index) => {
                        return (
                            <>
                                <div  key={item.chart01data_id} className="chart01data" style={{}}>
                                    <div>{item.chart01data_id}</div>
                                    <div>{item.chart01data_user}</div>
                                    <div>{item.chart01data_goodname}</div>
                                    <div>{item.chart01data_star}</div>
                                    <div>{item.chart01data_text}</div>
                                    {/* <Buttonclass prop="edit" onclick={()=>{console.log(item)}} />
                                    <Buttonclass prop="delete" /> */}
                                </div>
                            </>
                        )
                    })}
                    
                </div>
                </div>

            </div>
        </div>
    )

})


export default Chart01;