import React,{Component} from 'react';
import './brand.css'
import '../common/common.css'
import "whatwg-fetch"
import Nav from '../home/nav'
//import {Link} from 'react-router-dom'
class ComponentName extends Component {
    //页面加载前
    componentWillMount(){
        var that=this
        fetch("/api/shop/brandList.do").then(function(res){
            return res.json()
        }).then(function(data){
           that.setState({
               bandList:data
           })

        })
    }
    //初始数据
    constructor(props){
        super(props)
        this.state={
            bandList:[]
        }
    }
    render() {
        //循环品牌数据列表
        let bandLists=this.state.bandList.map((item,index)=>{
            return(
                <a href="http://www.lightness.com.hk/" key={index}>
                    <img src={item.b_img} alt="" />
                    <div className="imgTitle">
                        <span>&#xe63f;</span>&nbsp;&nbsp;
                        {item.b_name}
                    </div>
                </a>
            )
        });
        return (
            <div className="brand_main">
                <div className="brand_header">
                    <span>品牌—Show</span>
                </div>
                <div className="bandBody">
                    <div className="image">
                        {bandLists}
                    </div>
                </div>
                <div className="foot_text">
                    没有更多了……
                </div>
                <Nav></Nav>
            </div>
        )
    }
}
export default ComponentName;