/**
 * Created by hpp on 2018/1/9.
 */

import React,{Component} from 'react'
import "whatwg-fetch"
import {Link} from 'react-router-dom';
import "whatwg-fetch"
import Nav from '../home/nav'
import "../common/common.css"

class Find_Details extends Component {
    constructor(){
        super();
        this.state={
            arr:[],
            id:""
        };
    }
    componentWillMount(){
        let that=this;
        that.setState({
            id:that.props.match.params.id
        });
        setTimeout(function(){
            fetch("/api/shop/findDetail.do?id="+that.state.id).then(res=>res.json()).then(data=>{
                that.setState({
                    arr:data.data[0]
                });
            });
        },100);
        for(let i=0;i<that.state.arr.length;i++){
            if(that.state.id===that.state.arr[i].s_id){
                that.setState({
                    arr:that.state.arr[i]
                })
            }
        }
    }
    more(){
        let ul=document.getElementsByClassName('aa')[0];
        if(window.getComputedStyle(ul).height==='0px'){
            ul.style.height='auto'
        }else{
            ul.style.height='0px'
        }

    }
    render() {
        let data=this.state.arr;
        return (
            <div>
                <div className="findDetail_header">
                    <Link to="/Find" className="toLogin"><div className="icon">&#xe601;</div></Link>
                    <span>发现详情</span>
                </div>
                <div className="Show_img">
                    <div><img src={data.f_yi_img} alt="underwear"/></div>
                    <p>{data.f_yi_name}</p>
                    <p>${data.f_yi_mon}</p>
                </div>
                <div className="Show_img">
                    <div><img src={data.f_ku_img} alt="Panties"/></div>
                    <p>{data.f_ku_name}</p>
                    <p>${data.f_ku_mon}</p>
                </div>
                <div className="more" onClick={this.more.bind(this)}>+</div>
                <div className="ze">
                    <ul className="aa pp" >
                        <li>分享</li>
                        <li>收藏</li>
                        <li>转发</li>
                    </ul>
                </div>
                <div className="foot_text">
                    没有更多了……
                </div>
                <Nav></Nav>
            </div>
        )
    }
}

export default Find_Details