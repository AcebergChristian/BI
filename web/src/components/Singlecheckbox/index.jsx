import React, { Component, useState, useRef, useEffect } from 'react'
//import axios from 'axios'
import './index.css'



const Singlecheckbox = () => {

    const [isrememberpwd, setrememberpwd] = useState(false)
    const rememberpwd = () => {
        setrememberpwd(pre => {
            return !pre
        }, [])
    }

    return (
        <div>
            <div className="login_remembermecheckbox" onClick={rememberpwd} style={{ color: isrememberpwd ? '#4c81ff' : '#333333' }}>
                <div style={{backgroundColor:isrememberpwd ? '#4c81ff' : '',color: isrememberpwd ? '#ffffff' : '',borderColor: isrememberpwd?'#4c81ff':'#c8cad1'}}>{isrememberpwd ? '✔' : ''}</div>记住密码
            </div>
        </div>
    )

}


export default Singlecheckbox;