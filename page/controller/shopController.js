/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const  shopModal=require("../modal/shopModal.js");

module.exports={
  //首页——发现列表
    findList(req,res){
        "use strict";
        shopModal.findList().then(function(data){
            res.send({code:200,data:data})
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //发现详情页
    findDetail(req,res){
        "use strict";
        let id=req.query.id;
        console.log(req.query)
        console.log("44634",id)
        shopModal.findDetail(id).then(function(data){
            res.send({code:200,data:data})
            console.log(data)
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //显示品牌列表
    brandList(req,res){
        let id=req.query.id;
        let name=req.query.name;
        let brandImg=req.query.brandImg;
        shopModal.brandList(name,brandImg,id).then(function(data){
            res.json(data)
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //显示视频列表
    showList(req,res){
        shopModal.showList().then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //添加收藏视频
    liveAddCollect(req,res){
        let userid=req.body.id;
        shopModal.liveAddCollect(userid).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //删除视频列表
    showDelete(req,res){
        let id=req.query.id;
        shopModal.showDelete(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    }
};