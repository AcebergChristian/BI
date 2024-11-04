import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import './index.css'



const Totalchart = () => {



    const totalchart_totalnum_value = useRef()
    let counttime = 9.99
    const [counttimenum,setcounttime] = useState(counttime)
    const counttimefunc = () => {
        setcounttime(
            pre=>{
            if (pre < 1034295.23) {
                pre = pre + Number(Math.random() * 50000)
                return pre
            }
            else {
                return pre
            }
        }

        )
        
 
    }

    
    useEffect(() => {
        (function animloop() {
            counttimefunc()
            window.requestAnimationFrame(animloop);
        })();
    },[])



    return (
        <div id="totalchart">
            <div className="totalchart_totalnum">
                <div className="totalchart_totalnum_title">
                    <h4>当日总成交额</h4>
                </div>
                <div ref={totalchart_totalnum_value} className="totalchart_totalnum_value">
                    {counttimenum.toFixed(2).toString()}
                </div>
            </div>
            <div className="totalchart_chart1">
                <div className="totalchart_chart_title">
                    销售量
                </div>
                <div className="totalchart_chart1_num">
                    58293
                </div>
            </div>
            <div className="totalchart_chart2">
                <div className="totalchart_chart_title">
                    销售种类
                </div>
                <div className="totalchart_chart2_num">
                    243
                </div>
            </div>
            <div className="totalchart_chart3">
                <div className="totalchart_chart_title">
                    订单数
                </div>
                <div className="totalchart_chart3_num">
                    66127
                </div>
            </div>
            <div className="totalchart_chart4">
                <div className="totalchart_chart_title">
                    退订单数
                </div>
                <div className="totalchart_chart4_num">
                    136
                </div>
            </div>
            <div className="totalchart_chart5">
                <div className="totalchart_chart_title">
                    用户数
                </div>
                <div className="totalchart_chart5_num">
                    120223
                </div>
            </div>
            <div className="totalchart_chart6">
                <div className="totalchart_chart_title">
                    会员数
                </div>
                <div className="totalchart_chart6_num">
                    9834
                </div>
            </div>
            <div className="totalchart_chart7">
                <div className="totalchart_chart_title">
                    DAU
                </div>
                <div className="totalchart_chart8_num">
                    87432
                </div>
            </div>
            <div className="totalchart_chart8">
                <div className="totalchart_chart_title">
                    新增用户数
                </div>
                <div className="totalchart_chart8_num">
                    34
                </div>
            </div>
        </div>
    )

}


export default Totalchart;