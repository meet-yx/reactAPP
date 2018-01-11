import React,{Component} from 'react';
import '../common/common.css'
import './live.css'
import {Link} from 'react-router-dom'
import Nav from '../home/nav'
class Live extends Component {

    //初始数据
    constructor(props) {
        super(props);
        this.state = {
            vidList: []
        }
    }

    //页面加载前
    componentWillMount() {
        var that = this;
        fetch("/api/shop/showList.do").then(function (res) {
            return res.json()
        }).then(function (data) {
            that.setState({
                vidList: data.data
            })
        })
    }

    render() {
        let vidLists = this.state.vidList.map((item, index)=> {
            return (
                <div className="vidList" key={index}>
                    <Link to={"/live/"+item.v_id} key={index}>
                        <video src={item.v_img} height="100rem" width="100%"></video>
                        <span className="v_iconPlay">&#xe684;</span>
                    </Link>
                    <div className="imgTitle">
                        <div className="live_collect">
                            <span className="collect">&#xe606;</span>&nbsp;收藏
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="live_enjoy">
                            <span className="enjoy">&#xe63e;</span>&nbsp;分享
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="live_main">
                <div className="live_header">
                    <span>Live Show</span>
                </div>
                <div className="live_Body">
                    <div className="vid">
                        {vidLists}
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
export default Live;