/**
 * Created by hpp on 2018/1/8.
 */

import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Index_Find extends Component {
    render() {
        return (
            <div className="Box">
                <div className="title"><span>&#xe604; 发 现</span><span><Link to="/Find">查看更多 ></Link></span></div>
                <div><Link to="/Find"><img src="/images/find.jpg" alt="findImg"/></Link></div>
            </div>
        )
    }
}

export default Index_Find