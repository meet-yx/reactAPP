const userModal = require("../modal/userModal.js");
const crypto = require('crypto');

//===============短信================

var AV = require('leancloud-storage');
var APP_ID = 'lHRFBMoAeJY173fsydhWhsA9-gzGzoHsz';
var APP_KEY = 'KaLfFi6mldW1kh68TFsL9OSt';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


const userLoginController = {
    //发送验证码
    getCode(req, res){
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.telReg,
            name: '项目',
            op: '注册验证',
            ttl: 10                     // 验证码有效时间为 10 分钟
        }).then(function () {
            res.send({flag: 1, message: "成功"})
        }, function (err) {
            res.send({flag: -1, message: "失败"})
        });
    },
    //判断验证码是否正确
    register(req, res){
        AV.Cloud.verifySmsCode(req.body.code, req.body.telReg).then(function () {
            res.send({flag: 1, message: "成功"})
        }, function (err) {
            res.send({flag: -1, message: "失败"})
        });
    },
    //注册——添加数据
    addUser(req, res){
        var phone = req.body.telReg;
        var pwd = req.body.pwd;
        var forgetPwd = req.body.forgetPwd;
        var arr;
        if (forgetPwd == undefined) {
            arr = [pwd, phone];
        } else {
            arr = [pwd, phone, forgetPwd];
        }
        userModal.addUser(arr).then(data=> {
            res.send({flag: 1, message: "成功"})
        })
    },
    //判断手机号是否存在
    getUserTel(req, res){
        console.log(req.body)
        userModal.userDao([req.body.data
        ]).then(data=> {
            console.log(data)
            if (data.length > 0) {
                console.log("2346")
                res.send({flag: 1, message: "成功"})
            } else {
                res.send({flag: -1, message: "失败"})
            }
        })
    }

};

module.exports = userLoginController;
