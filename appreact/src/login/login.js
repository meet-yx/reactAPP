import React,{Component} from 'react';
import './login.css';
import '../common/common.css'
import "whatwg-fetch"
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state={
            time:""
        }
    }
    //登录按钮
    login() {
        let userTel = document.getElementById("tel").value;
        let pwd = document.getElementById("pwd").value;
        let json = [userTel, pwd];
        fetch("/api/user/login.do",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'data': json})
            }
        ).then(res=>res.json()).then(data=> {
            if (data.code === 200) {
                sessionStorage.setItem("u_name",data.data[0].u_name);
                sessionStorage.setItem("u_id",data.data[0].u_id);
                sessionStorage.setItem("headSrc",data.data[0].headSrc);
                window.location.href = "/";
            } else {
                document.getElementById("tel").style.borderBottom = "1px solid rgba(255,0,0,.3)";
                document.getElementById("pwd").style.borderBottom = "1px solid rgba(255,0,0,.3)";
            }
        })

    }

    //手机号输入框
    telReg() {
        let json = document.getElementById("telReg").value;
        fetch("/api/user/getUserTel.do",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'data': json})
            }
        ).then(res=>res.json()).then(data=> {
            if(data.flag===1){
                document.getElementById("telReg").style.borderBottom="1px solid rgba(255,0,0,.3)"
            }else {
                document.getElementById("telReg").style.borderBottom="1px solid rgba(0,0,0,.1)"
            }
        })
    }

    //发送验证码
    sendCode(){
        let json = document.getElementById("telReg").value;
        let yanzheng=document.getElementsByClassName("confirm")[0];
        //console.log(yanzheng.innerText)
        let that=this;
        let time=60;
        let a=setInterval(function(){
            that.setState({
                time:time--
            });
            if(that.state.time==="-1"){
                yanzheng.innerText="发送验证码";
                yanzheng.style.color="#333";
                clearInterval(a)
            }else{
                yanzheng.innerText="倒计时"+that.state.time+"秒";
                yanzheng.style.color="red"
            }
        },1000);
        fetch("/api/user/getCode.do",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'telReg': json})
        }).then(res=>res.json()).then(data=> {
            console.log(data)
        })

    }

    //注册按钮
    register() {
        let telReg = document.getElementById("telReg").value;
        let pwdReg = document.getElementById("pwdReg").value;
        let  codeReg= document.getElementById("codeReg").value;

        fetch("/api/user/register.do",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'code': codeReg,'telReg':telReg})
        }).then(res=>res.json()).then(data=> {
            console.log(data)
            if(data.flag===1){
                fetch("/api/user/addUser.do",{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'pwd': pwdReg,'telReg':telReg})
                }).then(res=>res.json()).then(data=> {
                    console.log(data)
                    if (data.flag === 1) {
                        window.location.href = "/"
                    }
                })
            }
        })
    }

    changeReg() {
        document.getElementById("tel").style.borderBottom = "1px solid rgba(0,0,0,.1)";
        document.getElementById("pwd").style.borderBottom = "1px solid rgba(0,0,0,.1)";
        this.refs.login.style.display = "none";
        this.refs.register.style.display = "block";
        this.refs.click_reg.style.borderBottom = "1px solid rgba(0,0,0,.1)";
        this.refs.click_reg.style.color = "#333";
        this.refs.click_log.style.borderBottom = "none";
        this.refs.click_log.style.color = "rgba(0,0,0,.6)"
    }

    changeLogin() {
        this.refs.login.style.display = "block";
        this.refs.register.style.display = "none";
        this.refs.click_log.style.borderBottom = "1px solid rgba(0,0,0,.1)";
        this.refs.click_log.style.color = "#333";
        this.refs.click_reg.style.borderBottom = "none";
        this.refs.click_reg.style.color = "rgba(0,0,0,.6)"
    }

    render() {
        return (
            <div className="login_main">
                <div className="header">
                    <div className="mengBan">
                        <img src="images/logo.png" alt=""/>
                        <h1>show</h1>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li ref="click_log" onClick={this.changeLogin.bind(this)}>登录</li>
                        <li ref="click_reg" onClick={this.changeReg.bind(this)}>注册</li>
                    </ul>
                </div>
                <div className="bobyLogin" ref="login">
                    <input type="text" placeholder="请输入手机号" id="tel"/>
                    <input type="password" placeholder="请输入密码" id="pwd"/>
                    <button type="button" onClick={this.login.bind(this)}>登录</button>
                    <Link to="./updatePwd" className="updatePwd"><p>忘记密码？</p></Link>
                </div>
                <div className="bobyRegister" ref="register">
                    <input type="text" placeholder="请输入手机号" id="telReg" onBlur={this.telReg.bind(this)}/>
                    <div className="validate">
                        <input type="text" placeholder="请输入验证码" id="codeReg"/>
                        <button type="button" className="confirm" onClick={this.sendCode.bind(this)}>发送验证码</button>
                    </div>
                    <input type="password" placeholder="请输入登录密码" id="pwdReg"/>
                    <button type="button" onClick={this.register.bind(this)}>注册</button>
                    <p>注册代表已同意《show协议》</p>
                </div>
            </div>
        )
    }
}
export default Login;