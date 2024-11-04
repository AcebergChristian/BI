import React, { ReactDom, Component, useState, useRef, useEffect } from 'react'
import './index.css'
//import axios from 'axios'




const Nav = () => {


    //nav 滚动祝福语
    useEffect(() => {


    }, [])


    return (
        <div id="nav">
            <div className='nav_title'>
                <div className='nav_logo'>
                    {/* <img src="https://www.risenenergy.com/uploads/20220729/logo%20CN.png" alt="" height="30" /> */}
                </div>
                <div className='nav_span'>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据可视化大屏</span>
                </div>
            </div>
            <div className='nav_slider nav_slidertrans' >
                <span> 🎖恭喜战狼团队荣获冠军称号！ </span>
                <span> 🏆恭喜老王荣获冠军称号！ </span>
                <span> 🎖恭喜ABC团队打破单日成交记录！ </span>
            </div>
        </div>
    )

}


export default Nav;