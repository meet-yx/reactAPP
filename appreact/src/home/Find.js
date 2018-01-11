/**
 * Created by hpp on 2018/1/8.
 */

import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import "whatwg-fetch"
import Nav from '../home/nav'
import '../common/common.css'

class Find extends Component {
    constructor(){
        super();
        this.state={
           arr:[]
        }
    }
    componentWillMount(){
        let that=this;
        fetch("/api/shop/findList.do").then(res=>res.json()).then(data=>{
            that.setState({
                arr:data.data
            })
        })
    }
    render() {
        let list=this.state.arr.map((item,index)=>{
            return (
                <div key={index}>
                    <Link  to={"/Find_Details/"+item.s_id}><img src={item.s_img} alt="findImg"/> </Link>
                    <div>
                        <span>{item.s_name}</span>
                        <div>
                            <span>{item.s_content}</span>
                            <span>more</span>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="find_main">
                <div className="header">
                    <Link to="/" className="toLogin"><div className="icon">&#xe601;</div></Link>
                    <span>发现美丽</span>
                </div>
                <p className="find_tit"><span>&#xe613;</span> THEME</p>
                <div className="find_img">
                    {list}
                </div>
                <div className="foot_text">
                    没有更多了……
                </div>
                <Nav></Nav>
            </div>
        )
    }
}

export default Find