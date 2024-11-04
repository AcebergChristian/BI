import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import { useNavigate, Link,MenuItem } from 'react-router-dom'
import './index.css'



const Chart05 = () => {


    const navigate = useNavigate();
    const getselect = useRef()
    // const hometomap = () => {

    //     navigate("/map?args=")


    //     };


    return (
        <div id="chart05">
            <div className="chart05_title">
                销售地图
            </div>
            <div className="chart05_content">
                <div className="chart05_content1">
                    <div className="chart05_contentin">
                        <Link to={'/map/' + '1'} activeClassName='active' style={{ textDecoration:'none'}}>
                                <div className="chart05_content_title" value="0" ref={getselect} >
                                    销售地图1
                                    <svg fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 48 48" width="1em" height="1em" class="icon--xP5pP arco-icon arco-icon-list"><path d="M13 24h30M5 12h4m4 24h30M13 12h30M5 24h4M5 36h4"></path></svg>
                                </div>
                        </Link>
                        <div className="chart05_content_value">
                            100.00
                        </div>
                    </div>
                    <div className="chart05_contentin">
                    <Link to={'/map/' + '2'} activeClassName='active' style={{ textDecoration:'none'}}>
                            <div className=" chart05_content_title" value="0" ref={getselect} >
                                销售地图2
                                <svg fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 48 48" width="1em" height="1em" class="icon--xP5pP arco-icon arco-icon-list"><path d="M13 24h30M5 12h4m4 24h30M13 12h30M5 24h4M5 36h4"></path></svg>
                            </div>
                        </Link>
                        <div className=" chart05_content_value">
                            200.00
                        </div>
                    </div>
                </div>
                <div className="chart05_content2">
                    <div className="chart05_contentin">
                    <Link to={'/map/' + '3'} activeClassName='active' style={{ textDecoration:'none'}}>
                            <div className=" chart05_content_title">
                                销售地图3
                                <svg fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 48 48" width="1em" height="1em" class="icon--xP5pP arco-icon arco-icon-list"><path d="M13 24h30M5 12h4m4 24h30M13 12h30M5 24h4M5 36h4"></path></svg>
                            </div>
                        </Link>
                        <div className=" chart05_content_value">
                            300.00
                        </div>
                    </div>
                    <div className="chart05_contentin">
                    <Link to={'/map/' + '4'} activeClassName='active' style={{ textDecoration:'none'}}>
                            <div className=" chart05_content_title">
                                销售地图4
                                <svg fill="none" stroke="currentColor" stroke-width="4" viewBox="0 0 48 48" width="1em" height="1em" class="icon--xP5pP arco-icon arco-icon-list"><path d="M13 24h30M5 12h4m4 24h30M13 12h30M5 24h4M5 36h4"></path></svg>
                            </div>
                        </Link>
                        <div className=" chart05_content_value">
                            400.00
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default Chart05;