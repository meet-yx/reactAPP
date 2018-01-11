/**
 * Created by hpp on 2018/1/8.
 */

import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Index_brand extends Component {
    render() {
        return (
            <div className="Box">
                <div className="title"><span>&#xe63f; 品 牌</span><span><Link to="/Brand">查看更多 ></Link></span></div>
                <div><Link to="/Brand"><img src="/images/brand.jpg" alt="brandImg"/></Link></div>
            </div>
        )
    }
}

export default Index_brand