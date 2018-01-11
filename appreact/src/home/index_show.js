/**
 * Created by hpp on 2018/1/8.
 */

import React,{Component} from 'react'
import {Link} from 'react-router-dom';


class Index_show extends Component {
    render() {
        return (
            <div className="Box">
                <div className="title"><span>&#xe604; show</span><span><Link to="/Show">查看更多 ></Link></span></div>
                <div><Link to="/Show"><img src="/images/showImg.png" alt="showImg"/></Link></div>
            </div>
        )
    }
}

export default Index_show