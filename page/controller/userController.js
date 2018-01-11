/**
 * Created by Administrator on 2018/1/3 0003.
 */
"use strict";
const  userModal=require("../modal/userModal.js");

module.exports={
    //用户登陆
    userLogin(req,res){
        "use strict";
        let userTell = req.body.data[0];
        let userPwd = req.body.data[1];
        userModal.userLoginTel(userTell,userPwd).then(function(data){
            console.log(data)
            if(data==''){
                res.send({code:500,data:data});
            }else {
                res.send({code:200,data:data});
            }

        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        });
    },

    //查看个人信息
    userList(req,res){
        let id=req.query.id;
        userModal.userList(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            console.log(err);
            res.send({code:500});
        })
    },
    //个人中心——修改密码
    userUpdatePwd(req,res){
        let id=req.body.id;
        let pwd=req.body.pwd;
        userModal.userUpdatePwd(pwd,id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    },
    //编辑资料
    userUpdate(req,res){
        let id=req.body.id;
        let name=req.body.name;
        userModal.userUpdate(name,id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    },
    //查看收藏信息
    userCollectList(req,res){
        let id=req.query.id;
        userModal.userCollectList(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    },
    //删除收藏信息
    userCollectDelete(req,res){
        let id=req.body.id;
        userModal.userCollectDelete(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    },
    //查看分享信息
    userEnjoyList(req,res){
        let id=req.query.id;
        userModal.userEnjoyList(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    },
    //删除分享信息
    userEnjoyDelete(req,res){
        let id=req.body.id;
        userModal.userEnjoyDelete(id).then(function(data){
            res.json({code:200,data:data})
        }).catch(function(err){
            res.send({code:500})
        })
    }
};