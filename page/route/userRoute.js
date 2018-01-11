/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const express=require("express");
const userRoute=express.Router();
const userController=require("../controller/userController.js");
const userLoginController=require("../controller/userLoginController.js");

//登录
userRoute.route("/login.do").post(userController.userLogin);

//注册
//发送验证码
userRoute.post('/getCode.do',userLoginController.getCode);
//判断验证码是否正确
userRoute.post('/register.do',userLoginController.register);
//注册——添加数据
userRoute.post('/addUser.do',userLoginController.addUser);
//验证手机号是否存在
userRoute.post('/getUserTel.do',userLoginController.getUserTel);


//查看个人信息
userRoute.route("/userList.do").get(userController.userList);
//个人中心——修改密码
userRoute.route("/userUpdatePwd.do").post(userController.userUpdatePwd);
//编辑资料
userRoute.route("/userUpdate.do").post(userController.userUpdate);

//查看分享信息
userRoute.route("/userEnjoyList.do").get(userController.userEnjoyList);
//删除分享信息
userRoute.route("/userEnjoyDelete.do").post(userController.userEnjoyDelete);


module.exports=userRoute;