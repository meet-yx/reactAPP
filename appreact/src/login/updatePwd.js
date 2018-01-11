/**
 * Created by Administrator on 2018/1/7 0007.
 */
import React,{Component} from 'react';
import './updatePwd.css';
import '../common/common.css'
import "whatwg-fetch"
import  {Link} from 'react-router-dom'

class UpdatePwd extends  Component{
    //手机号输入框
    telUpdate() {
        let json = document.getElementById("telUpdate").value;
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
                document.getElementById("telUpdate").style.borderBottom="1px solid rgba(0,0,0,.1)"
            }else {
                document.getElementById("telUpdate").style.borderBottom="1px solid rgba(255,0,0,.3)"
            }
        })
    }

    //发送验证码
    sendCode(){
        let json = document.getElementById("telUpdate").value;
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

    //重置密码按钮
    updatePwd() {
        let telUpdate = document.getElementById("telUpdate").value;
        let pwdUpdate = document.getElementById("pwdUpdate").value;
        let  codeUpdate= document.getElementById("codeUpdate").value;

        fetch("/api/user/register.do",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'code': codeUpdate,'telReg':telUpdate})
        }).then(res=>res.json()).then(data=> {
            console.log(data)
            if(data.flag===1){
                fetch("/api/user/addUser.do",{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'pwd': pwdUpdate,'telReg':telUpdate,'forgetPwd':'123'})
                }).then(res=>res.json()).then(data=> {
                    console.log(data)
                    if (data.flag === 1) {
                        window.location.href = "/login"
                    }
                })
            }
        })
    }

    render(){
        return(
            <div className="update_main">
                <div className="update_header">
                    <Link to="/" className="toLogin"><div className="icon">&#xe601;</div></Link>
                    <span>重置密码</span>
                </div>
                <div className="update_main">
                    <input type="text" placeholder="请输入手机号" id="telUpdate" onBlur={this.telUpdate.bind(this)}/>
                    <div className="validate">
                        <input type="text" placeholder="请输入验证码" id="codeUpdate"/>
                        <button type="button" className="confirm" onClick={this.sendCode.bind(this)}>发送验证码</button>
                    </div>
                    <input type="password" placeholder="请输入新密码" id="pwdUpdate"/>
                    <button type="button" onClick={this.updatePwd.bind(this)}>重置密码</button>
                    <Link to="/login" className="toLogin"><p>已有账号登录</p></Link>
                </div>
            </div>
        )
    }
}
export  default UpdatePwd;