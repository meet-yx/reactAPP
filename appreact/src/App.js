import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from './login/login';          //登录
import ForgetPwd from './login/updatePwd'    //忘记密码
import Brand from './brand/brand';           //品牌
import Live from './live/live';               //show
import LiveDetail from './live/detail'       //show详情
import Home from './home/Home'              //首页
import Admin from './home/admin.js'//个人
import updatePwd from './Changepassword/Changepassword'//修改密码
import Find from './home/Find.js'              //发现
import Find_Details from './home/Find_Details.js'//发现详情
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/Find" component={Find}></Route>
                        <Route path="/Find_Details/:id" component={Find_Details}></Route>
                        <Route path="/brand" component={Brand}></Route>
                        <Route path="/live" exact component={Live}></Route>
                        <Route path="/live/:id" component={LiveDetail}></Route>
                        <Route path="/updatePwd" component={ForgetPwd}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Route path="/Changepassword" component={updatePwd}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
