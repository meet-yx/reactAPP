import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './admin.css';
import "whatwg-fetch";
import Nav from '../home/nav'
import '../common/common.css'

class Personalnav extends Component {
    exit() {
        sessionStorage.setItem('u_name', "");
        sessionStorage.setItem('u_id', "");
        window.location.href = '/login';
    }

    render() {
        let headSrc = sessionStorage.getItem("headSrc");
        console.log(headSrc)
        let name = sessionStorage.getItem("u_name");

        return (
            <div className="admin_bg">
                <div className="admin_head">
                    <div className="headimg"><img src={headSrc} alt=""/></div>
                    <p>{name}</p>
                </div>
                <ul className="pernav">
                    <li><Link to="/admin" className="tiao"><span><span>&#xe61e;</span> 我的收藏 </span><span
                        className="jiantou">&#xe68c;</span></Link></li>
                    <li><Link to="/admin" className="tiao"><span><span>&#xe609;</span> 编辑资料</span> <span
                        className="jiantou">&#xe68c;</span></Link></li>
                    <li><Link to="/Changepassword" className="tiao"><span><span>&#xe60b;</span> 修改密码 </span><span
                        className="jiantou">&#xe68c;</span></Link></li>
                </ul>
                <div className="btn">
                    <button onClick={this.exit.bind(this)}>退出登录</button>
                </div>
                <Nav></Nav>
            </div>
        )
    }
}
export default Personalnav