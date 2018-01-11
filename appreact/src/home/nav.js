/**
 * Created by hpp on 2018/1/4.
 * Nav 导航
 */

import React,{Component} from 'react'
import '../nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    my(){
        let name=sessionStorage.getItem("u_name");
        let id=sessionStorage.getItem("u_id");
        if(name===""||id===""){
            window.location.href='/login'
        }else {
            window.location.href='/admin'
        }
    }
    render() {
        return (
            <div id="homeNav">
                <ul className="nav">
                    <li><Link to="/"  activestyle={{backgroundColor:'transparent',color:"#fad144"}}><span>&#xe600;</span>首 页</Link></li>
                    <li><Link to="/brand" activestyle={{backgroundColor:'transparent',color:"#fad144"}}><span>&#xe63f;</span>品 牌</Link></li>
                    <li><Link to="/live"  activestyle={{backgroundColor:'transparent',color:"#fad144"}}><span>&#xe603;</span>show</Link></li>
                    <li><Link to="/Admin" activestyle={{backgroundColor:'transparent',color:"#fad144"}}><span onClick={this.my.bind(this)}>&#xe665;</span>我 的</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;