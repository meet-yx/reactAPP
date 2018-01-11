/**
 * Created by Administrator on 2018/1/9.
 */
import React,{Component} from 'react'
import './Changepassword.css';
import {Link} from 'react-router-dom';
import '../common/common.css'
import "whatwg-fetch";
class Changepassword extends Component {

    render() {
        return (
            <div className="change_bg">
                <div className="update_header">
                    <Link to="/admin" className="toLogin"><div className="icon">&#xe601;</div></Link>
                    <span>修改密码</span>
                </div>
                  <input type="text" ref="oldPassword" placeholder="请输入旧密码"/>
                <input type="text" ref="newPassword" placeholder="请输入新密码"/>
                    <button type="button">提交</button>
            </div>
        )
    }
}
export default Changepassword