import React,{Component} from 'react';
import '../common/common.css'
import './detail.css'
import {Link} from 'react-router-dom'
import Nav from '../home/nav'

class LiveDetail extends Component {
    //初始数据
    constructor(props) {
        super(props);
        this.state = {
            vidList: [],
            id:''
        }
    }

    //页面加载前
    componentWillMount() {
        var that = this;
        fetch("/api/shop/showList.do").then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log(data);
            that.setState({
                vidList: data.data,
                id:that.props.match.params.id
            })
            //console.log(that.state.vidList,"1")
            for(var i=0;i<that.state.vidList.length;i++){
                if(that.state.id==that.state.vidList[i].v_id){
                     that.setState({
                         vidList:that.state.vidList[i]
                     })
                }
            }
        })
    }

    //箭头
    content(){

        let content=document.getElementById("content");
        let content_images=document.getElementById("content_images");
            if(content.className==="live_content"){
                 content.className="liveContent_Change";
                content_images.src="/images/jiantou_shang.png"
            }else{
                content.className="live_content";
                content_images.src="/images/jiantou_xia.png";
            }
    }
    render() {
        let viDetail=this.state.vidList;
        return (
            <div className="liveDetail_main">

                <div className="liveDetail_header">
                    <Link to="/live" className="live"><div className="icon">&#xe601;</div></Link>
                    <span>show秀出你的风采</span>
                </div>
                <div className="liveDetail_body">
                    <p className="live_title">{viDetail.v_name}</p>
                    <video src={viDetail.v_img} controls width="360px" height="230px"></video>

                    <p className="live_content" id="content">简介：{viDetail.v_introduce}</p>
                    <span className="liveContent_icon" onClick={this.content.bind(this)}>
                        <img src="/images/jiantou_xia.png" alt="" id="content_images"/>
                    </span>
                </div>
                <Nav></Nav>

            </div>
        )
    }
}
export default LiveDetail;