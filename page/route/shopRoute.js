/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const express=require("express");
const shopRoute=express.Router();
const shopController=require("../controller/shopController.js");

//首页
  //发现列表
shopRoute.route("/findList.do").get(shopController.findList);

shopRoute.route("/findDetail.do").get(shopController.findDetail);
//品牌
shopRoute.route("/brandList.do").get(shopController.brandList);
//视频
shopRoute.route("/showList.do").get(shopController.showList);
//收藏删除视频
shopRoute.route("/showDelete.do").get(shopController.showDelete);

module.exports=shopRoute