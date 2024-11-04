import React, { Component, useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Singlecheckbox from '../Singlecheckbox'
import './index.css'



const Login = () => {

    //随机背景bg_pic
    const getlogin = useRef()
    const randombgpic = () => {
        var getrandombgpic = parseInt(Math.random() * 10)

        let bgstr = ''
        if (getrandombgpic == 0) {
            bgstr = "linear-gradient(140deg, rgb(152, 97, 255) 4%, rgb(47, 76, 154) 40% ,rgb(230, 167, 73) 110%) "
        }
        else {
            bgstr = "url(" + require("../../bg_pic/bg0" + getrandombgpic + ".jpeg") + ")"
        }

        return bgstr
    }

    //接口传递账密，并判断返回值
    const getidpwd = async (id, pwd) => {
        let data = { "id": id, pwd: pwd }
        await axios.post("/login/getidpwd", data).then((response) => {
            let data = response.data
            if(data.msg == "success"){
                navigate("/home")
            }
            else{
                alert(data.msg)
            }
        })
            .catch((error) => {
                console.log(error);
            });

    }

    //获取账号密码
    const navigate = useNavigate();
    const logintohome = () => {
        const getuserName = document.getElementById('userName_input').value
        const getpwd = document.getElementById('password_input').value

        getidpwd(getuserName, getpwd)

    };

    //改变记住密码的checkbox
    const [isrememberpwd, setrememberpwd] = useState(false)
    const rememberpwd = () => {
        setrememberpwd(pre => {
            return !pre
        }, [isrememberpwd])
    }

    return (
        <div id="login" ref={getlogin} style={{ backgroundImage: randombgpic() }}>
            <div className="login_pro">
                <div className="login_title">登录 Aceberg Pro</div>
                <div className="login_subtitle">Design By Aceberg</div>
                <div className="login_account">
                    <span className="arco-input-group-prefix">
                        <svg fill="none" stroke="currentColor" color="rgb(78 89 105)" strokeWidth="4" viewBox="0 0 48 48" width="1em" height="1em" className="arco-icon arco-icon-user"><path d="M7 37c0-4.97 4.03-8 9-8h16c4.97 0 9 3.03 9 8v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3Z"></path><circle cx="24" cy="15" r="8"></circle></svg>
                    </span>
                    <input id="userName_input" placeholder="用户名：admin" defaultValue="admin" />
                </div>
                <div className="login_pwd">
                    <span className="arco-input-group-prefix"><svg fill="none" stroke="currentColor" color="rgb(78 89 105)" strokeWidth="4" viewBox="0 0 48 48" width="1em" height="1em" className="arco-icon arco-icon-lock"><rect width="34" height="20" x="7" y="21" rx="1"></rect><path d="M15 21v-6a9 9 0 1 1 18 0v6M24 35v-8"></path></svg></span>
                    <input id="password_input" type="password" placeholder="密码：admin" defaultValue="admin"></input>
                </div>
                <div className="login_rememberme">
                    <Singlecheckbox />
                    <div className="login_remembermeforget">
                        <div>忘记密码</div>
                    </div>
                </div>
                <div onClick={logintohome} className="login_login">登陆</div>
                <div className="login_regster">注册账号</div>
            </div>
        </div>
    )

}


export default Login;