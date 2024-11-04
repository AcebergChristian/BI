import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import './index.css'
import Nav from '../Nav'
import Totalchart from '../Totalchart'
import Chart01 from '../Chart01'
import Chart02 from '../Chart02'
import Chart03 from '../Chart03'
import Chart04 from '../Chart04'
import Chart05 from '../Chart05'
import Chart06 from '../Chart06'


const Home = () => {
    


    return (
        <div id="container">
            <div className="container_left">
                <Chart02 />
                <Chart03 />
                <Chart04 />
            </div>
            <div className="container_mid">
                <Nav />
                <Totalchart />
                <Chart01 />
                
            </div>
            <div className="container_right">
                <Chart05 />
                <Chart06 />
            </div>
            
        </div>
    )

}


export default Home;