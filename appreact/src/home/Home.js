/**
 * Created by hpp on 2018/1/5.
 * Home 首页
 */

import React,{Component} from 'react'
import LunBo from './LunBo.js'//个人
import IndexFind from './index_Find.js'//发现
import Indexbrand from './index_brand.js'//品牌
import Indexshow from './index_show.js'//show
import Nav from './nav.js'
import '../home.css'
import '../../src/common/common.css'
//import '../bootstrp/css/bootstrap.min.css'

class Home extends Component {
    render() {
        return (
           <div>
               <div className="searchName">
                   <input type="text" placeholder="Search"/>
                   <span>&#xe60c;</span>
               </div>
               <LunBo></LunBo>
               <IndexFind></IndexFind>
               <Indexbrand></Indexbrand>
               <Indexshow/>
               <Nav></Nav>

           </div>
        )
    }
}

export default Home